import React from 'react';
import { Link } from 'react-router-dom';

const NewsContent = ({ anews }) => {
  console.log(anews);
  const { _id, title, image_url, details, total_view } = anews;

  return (
    <div className="card card-compact border mx-10 mb-10">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#706f6f] ">
          {details.length > 250 ? (
            <>
              {details.slice(0, 200)}
              <Link to={`news/${_id}`} className="font-bold text-blue-500">
                {' '}
                Read more
              </Link>
            </>
          ) : (
            <>{details}</>
          )}
        </p>
        <div className="card-actions justify-end">
          <p className="text-[#706f6f] text-base font-medium flex items-center gap-1 justify-end">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z"
                fill="#706F6F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75C16.971 3.75 21.186 6.973 22.676 11.44C22.796 11.802 22.796 12.192 22.676 12.553C21.189 17.024 16.971 20.25 11.999 20.25C7.029 20.25 2.813 17.027 1.324 12.56C1.20375 12.1987 1.20375 11.8083 1.324 11.447H1.323ZM17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27225 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12C6.75 10.6076 7.30312 9.27225 8.28769 8.28769C9.27225 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27225 17.25 10.6076 17.25 12Z"
                fill="#706F6F"
              />
            </svg>
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
