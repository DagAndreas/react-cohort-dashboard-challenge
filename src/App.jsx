import { createContext, useEffect, useState } from "react";

import "./App.css";
import HeaderCompany from "./headercomponents/HeaderCompany";
import contactsFileList from "./data/ContactsFileList";
import PostsFileList from "./data/PostsFileList";

//define a context
const PostContext = createContext();
const ContactContext = createContext();

function App() {
  const [posts, setPosts] = useState(PostsFileList);
  const [contacts, setContacts] = useState(contactsFileList);

  useEffect(() => {
    setContacts(contactsFileList)
    setPosts(PostsFileList)
  }, [])

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

  return (
    <>
      <PostContext.Provider value={{ posts, setPosts }}>
        <ContactContext.Provider value={{ contacts, setContacts }}>
          <header>
            <HeaderCompany />
            <h1>hei</h1>
          </header>
        </ContactContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export {App, PostContext, ContactContext}
