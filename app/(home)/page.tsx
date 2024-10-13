import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 아주아주 아주아주 아주아주 안전 ! ^_^
// 대신 해당 메서드가 끝나기전까지 아무것도 못함
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("im fetching in homepage");

  // fetch(URL).then((response) => response.json());
  // Fetch를 이미 진행해서 뭐를 변경할 필요가 없다.
  //  빠르게 인지하는 이유는 이미 fetch 된 상태를 기억하고 있기 떄문이다. (Cashing)
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li>
          <Link href={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
