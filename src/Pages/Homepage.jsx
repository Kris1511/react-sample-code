import React from "react";

const Homepage = () => {

  const newPosts = [
    {
      id: 1,
      title: "Everything we see around us constitutes nature",
      desc: "Including the sun, the moon, trees, flowers, fruits, human beings, birds, animals, etc.",
      img: "https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=",
    },
    {
      id: 2,
      title: "Nature is the ultimate source of our living",
      desc: "Plants, animals, and humans all depend on nature for their survival.",
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      id: 3,
      title: "Nature is beautiful, yet it is difficult to put into words.",
      desc: "The primary source of life on Earth is the components that exist naturally.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YoVyIWSCe7lLdwBFj3HAwPM-wUdrH5BI8w&usqp=CAU",
    },
  ];


  const blogPost = newPosts.map((post) => {
    return (
      <div
        className="bg-white rounded p-10 flex items-center space-x-10 mb-3"
        key={post.id}
      >
        <img src={post.img} alt="img logo" className="rounded w-20" />
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">{post.title}</h4>
          <p>{post.desc}</p>
        </div>
      </div>
    );
  });

  console.log(blogPost);

  return (
    <div className="m-10">
      <h4 className="text-2xl font-semibold mb-8">Latest Post!🤠</h4>
      {blogPost}
    </div>
  );
};

export default Homepage;
