Expected components

Global header:
* Box
	* icon
	* title
* profile

Sidemenu:
* Home button
	* links to /home or root
	* has icon
* Profile button
	* links to /profile
	* has icon



MainScreen:
* new post
	* profile
	* textbox
	* post button
* list of posts


post:
* top
	* profilecard
		* profilepicture
		* name
		* title
	* textbox of post
* commentsection
	* see previous comment
	* list of comments
	* new comment field
		* profilepicture
		* box
		* sendbutton

comment:
* profilepicture
* post

## Core Requirement:
- [x] implement the listed components
- [x] let the users create new posts
	- [x] take input
	- [x] post to api
	- [x] fetch api
- [ ] let users comment on existing posts
	- [x] take input
	- [x] post to api
	- [ ] refresh list
- [ ] Ensure that the fetched list is correctly displayed in order.
- [x] postst and comments should show initials in a colored circle
- [ ] clicking a posts tile should take the user to a separate route that shows only that post and all its comments
- [x] styleguide:
	- [x] Header background, button & font colour: #000046
	* [x] Form input background colour: #e6ebf5, clicked homebutton, textfields
	* [x] Button hover colour: #64dc78
	* [x] Post title colour: #64648c
	* [x] Textfield color: #93b7db i've added
	* [x] Body background colour: #F0F5FA
	* [x] [Header logo SVG](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/title-header-svg.md)
	* [x] [Home icon SVG](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/home-icon-svg.md)
	* [x] [Profile icon SVG](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/profile-icon-svg.md)


## Extension Requirements
* [x] use contextapi
* [ ] only 3 comments should be visible functionality
	* [ ] see previous comments button to list all
* [ ] Clicking on a post/name -> [Profile screen](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/profile.png)
	* [x] id1 =(emulated)= current user
	* [x] use pathparam to fetch user data
	* [x] allow user to change user data
	* [x] save button to save new data
		* [x] save to api
* [ ] posts should be able to be updated
* [ ] post should be able to be deleted
* [x] comments should be able to be updated
* [x] comments should be able to be deleted


![[Pasted image 20241003151544.png]]