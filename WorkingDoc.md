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
- [ ] implement the listed components
- [ ] let the users create new posts
	- [ ] take input
	- [ ] post to api
	- [ ] fetch api
- [ ] let users comment on existing posts
	- [ ] take input
	- [ ] post to api
	- [ ] refresh list
- [ ] postst and comments should show initials in a colored circle
- [ ] clicking a posts tile should take the user to a separate route that shows only that post and all its comments
- [ ] styleguide:
	- [ ] Header background, button & font colour: #000046
	* [ ] Form input background colour: #e6ebf5
	* [ ] Button hover colour: #64dc78
	* [ ] Post title colour: #64648c
	* [ ] Body background colour: #F0F5FA
	* [ ] [Header logo SVG](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/title-header-svg.md)
	* [ ] [Home icon SVG](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/home-icon-svg.md)
	* [ ] [Profile icon SVG](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/profile-icon-svg.md)

## Extension Requirements
* [ ] use contextapi
* [ ] only 3 comments should be visible functionality
	* [ ] see previous comments button to list all
* [ ] Clicking on a post/name -> [Profile screen](https://github.com/DagAndreas/react-cohort-dashboard-challenge/blob/main/_assets/profile.png)
	* [ ] id1 =(emulated)= current user
	* [ ] use pathparam to fetch user data
	* [ ] allow user to change user data
	* [ ] save button to save new data
		* [ ] save to api
* [ ] posts should be able to be updated
* [ ] post should be able to be deleted
* [ ] comments should be able to be updated
* [ ] comments should be able to be deleted
