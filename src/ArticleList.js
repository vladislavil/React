import React from "react"
import Article from "./Article"

export default function ArticleList({articles}) {
    const articlElements = articles.map((article) => <li key = {article.id}><Article article = {article}/></li>)
    return(
        <ul>
            {articlElements}
        </ul>
    )
}
