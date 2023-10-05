import React from "react";

interface Article {
  id: number;
  name: string;
  email: string;
}

const ArticlesPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const articles: Article[] = await res.json();

  return (
    <>
      <h1>Articles</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.name}</td>
              <td>{article.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ArticlesPage;
