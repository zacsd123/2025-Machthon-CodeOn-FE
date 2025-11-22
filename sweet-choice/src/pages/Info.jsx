import { useEffect, useState } from "react";
import { CardList } from "../components/CardList";
import axios from "../axios/axios"
import Quiz from "../components/Quiz";

const searchList = [
  "가",
  "나",
  "다",
  "라",
  "마",
  "바",
  "사",
  "아",
  "자",
  "차",
  "카",
  "타",
  "파",
  "하",
];

function Info() {
  const [onQuiz, setOnQuiz] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedChosung, setSelectedChosung] = useState(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
    setIsLoading(true);

    try {
        const localUserData = localStorage.getItem("accessToken")
        const headers = {
          "authorization": `Bearer ${localUserData}`
        }
      const response = await axios.get(`/api/posts?initial=${selectedChosung}`, {
        headers:headers
      });
      setPosts(response.data);
    } catch (error) {
      console.error(
        error
      );
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };
    fetchPosts();
  }, [selectedChosung]);

  const handleChosungClick = (char) => {
    if (selectedChosung === char) {
      setSelectedChosung(null);
    } else {
      setSelectedChosung(char);
    }
  };

  const toggleOnQuiz = () => {
    setOnQuiz(!onQuiz)
  }

  return (
      <div className="content-container">

        {onQuiz? 
        <Quiz onExitQuiz={toggleOnQuiz} />
        :
        <>
        <aside className="chosung-filter-area">
          <div className="filter-title">
            <span>가나다</span>
            <button className="reset-button">AD</button>
          </div>

          {searchList.map((char) => (
            <div
              key={char}
              className={`chosung-item ${
                char === selectedChosung ? "selected" : ""
              }`}
              onClick={() => handleChosungClick(char)}
            >
              {char}
            </div>
          ))}
        </aside>
        <div className="card-section">
          <h2 className="section-title">
            다양한 당에 대한 정보를 확인해보세요!
          </h2>

          <div className="section-header">
            <button className="quiz-button" onClick={toggleOnQuiz}>
              <span className="search-icon">🔍</span> 퀴즈 풀기
            </button>
          </div>

          <CardList data={posts} isLoading={isLoading} /> 
        </div>
        </>
        }
      </div>
  );
}

export default Info;
