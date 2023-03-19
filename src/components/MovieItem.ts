import { CoreInfoType } from "../@types/movieType";

export const MovieItem = (movieInfo: CoreInfoType) => {
  const { title, posterPath, voteAverage } = movieInfo;

  return `
<li>
      <a href="#">
        <div class="item-card">
          <img
            class="item-thumbnail skeleton "
            src="https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}"
            loading="lazy"
            alt="${title}"
          />
          <p class="item-title ">${title}</p>
          <p class="item-score "><img src="./star_filled.png" alt="별점" /> ${voteAverage}</p>
        </div>
      </a>
</li>
    `;
};
