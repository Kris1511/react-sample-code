import React, { useEffect, useState } from "react";

const Contactpage = () => {
  
  const [inputChange, setInputChange] = useState("");

  const [poster, setPoster] = useState([]);

  const changeInput = (e) => {
    const eventValue = e.target.value;

    if (eventValue.length >= 4) {
      setInputChange(eventValue);
    } else {
      setInputChange("");
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPost.json();
      setPoster(postJson.posts);
      console.log(postJson);
    };
    fetchPost();
  }, []);



  
  return (
    <>
      <div className="bg-white m-10 p-8 rounded">
        <div className="flex items-center justify-between">
          <h4>Hello {inputChange !== "" ? inputChange : "Guest"}!</h4>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="text-black outline-none px-3 py-2 rounded bg-gray-300"
              autoFocus
              onChange={changeInput}
            />
          </div>
        </div>
      </div>

      {poster.map((post) => (
        <div className="bg-white m-10 rounded" key={post.id}>
          <div className="bg-white rounded p-10 flex items-center space-x-10 mb-3 text-black">
            <h4>{post.id}</h4>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">{post.title}</h4>
              <p>{post.body}</p>
              <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill="currentColor"
                    d="m15 10l-.493-.082A.5.5 0 0 0 15 10.5zM4 10v-.5a.5.5 0 0 0-.5.5zm16.522 2.392l.49.098zM6 20.5h11.36v-1H6zm12.56-11H15v1h3.56zm-3.067.582l.806-4.835l-.986-.165l-.806 4.836l.986.164M14.82 3.5h-.213v1h.213zm-3.126 1.559L9.178 8.832l.832.555l2.515-3.774l-.832-.554M7.93 9.5H4v1h3.93zM3.5 10v8h1v-8zm16.312 8.49l1.2-6l-.98-.196l-1.2 6l.98.196M9.178 8.832A1.5 1.5 0 0 1 7.93 9.5v1a2.5 2.5 0 0 0 2.08-1.113l-.832-.555m7.121-3.585A1.5 1.5 0 0 0 14.82 3.5v1a.5.5 0 0 1 .494.582l.986.165m2.26 5.253a1.5 1.5 0 0 1 1.471 1.794l.98.196a2.5 2.5 0 0 0-2.45-2.99v1m-1.2 10a2.5 2.5 0 0 0 2.452-2.01l-.98-.196A1.5 1.5 0 0 1 17.36 19.5v1m-2.754-17a3.5 3.5 0 0 0-2.913 1.559l.832.554a2.5 2.5 0 0 1 2.08-1.113v-1M6 19.5A1.5 1.5 0 0 1 4.5 18h-1A2.5 2.5 0 0 0 6 20.5z"
                  ></path>
                  <path stroke="currentColor" d="M8 10v10"></path>
                </g>
              </svg>
              {post.reactions}
              {post.tags.map((tags, index) => {
                return (
                  <div key={`${tags}-${index}`} className="bg-green-300 px-2 py-1 rounded">
                    {tags}
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Contactpage;
