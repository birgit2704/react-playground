import React from "react";

interface Article {
  id: number;
  name: string;
}

const ArticlesPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const articles: Article[] = await res.json();

  return (
    <>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ArticlesPage;
