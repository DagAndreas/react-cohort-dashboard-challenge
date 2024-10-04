import { createContext, useEffect, useState } from "react";

import "./App.css";
import HeaderCompany from "./headercomponents/HeaderCompany";
import contactsFileList from "./data/ContactsFileList";
import PostsFileList from "./data/PostsFileList";
import { Route, Routes } from "react-router-dom";
import Home from "./maincomponents/Home";

//define a context
const PostContext = createContext();
const ContactContext = createContext();

function App() {
  const [posts, setPosts] = useState(PostsFileList);
  const [contacts, setContacts] = useState(contactsFileList);

  useEffect(() => {
    setContacts(contactsFileList);
    setPosts(PostsFileList.reverse());
  }, []);

  return (
    <>
      <PostContext.Provider value={{ posts, setPosts }}>
        <ContactContext.Provider value={{ contacts, setContacts }}>
          <header>
            <HeaderCompany />
            <Routes>
              <Route Route path="/" element={<Home />} />
              <Route />
            </Routes>
          </header>
        </ContactContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export { App, PostContext, ContactContext };


// const postPropType = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   contactId: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// });

// const contactPropType = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   postId: PropTypes.number.isRequired,
//   contactId: PropTypes.number.isRequired,
//   content: PropTypes.string.isRequired,
// });


// // Function to fetch posts
// async function getPosts() {
//   const response = await fetch("https://boolean-uk-api-server.fly.dev/dagandreas/post");
//   return response.json();
// }

// // Function to fetch contacts
// async function getContacts() {
//   const response = await fetch("https://boolean-uk-api-server.fly.dev/dagandreas/contact");
//   return response.json();
// }

// // Fetch both posts and contacts concurrently
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const [postsData, contactsData] = await Promise.all([getPosts(), getContacts()]);
//       setPosts(postsData);
//       console.log(postsData)
//       console.log(contactsData)
//       setContacts(contactsData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);
