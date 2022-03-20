# UFOs
UFO Sightings with JavaScript

![UFOiStock](https://user-images.githubusercontent.com/89308251/140245996-640f8218-fa09-4b0b-a550-ab241c797339.jpg)


## Challenge Overview

### Purpose:
   The purpose of this analysis is to provide a more in-depth analysis of UFO sightings by using HTML and JavaScript. This webpage allows users to filter the table on multiple criteria at the same time. 
In addition to the date, I added filters for the city, state, country, and shape in the HTML file. In the JavaScrpt file, there is one new function that saves the element, value, and id of the filter that was changed and another new function that loops through the dataset and keeps only the results that match the search criteria.


## Resources
- Software:
   - Visual Studio Code 1.61.2
   - HTML/CSS
   - JavaScript
   - BootStrap 4

- Data source: 
   - [data.js](https://github.com/SYDsCorner/UFOs/blob/main/static/js/data.js)   


## Results 

- The webpage is "[UFO Sighting: The Truth Is Out There](https://sydscorner.github.io/UFOs/)" 

- The process of using the search criteria:
   - The users will be able to search by typing in the boxes on the left hand. They can use the filters by inputting criteria in the boxes and pressing "Enter".
     The result will appear on the right hand side of the Filter Search.
   - To reset the filter: Click on "UFO Sightings" which is on the navigation bar at the top left of the webpage

![UFO_webpage](https://user-images.githubusercontent.com/89308251/140598765-c3ada825-d924-49dd-b2d6-35987750abbb.png)

- Filtering the table

   - by Date

     ![Filtered_Date](https://user-images.githubusercontent.com/89308251/140255097-05c4896e-eb1d-4f03-9be1-c0d9f2a5833b.png)

   - by City
   
     ![Filtered_City](https://user-images.githubusercontent.com/89308251/140255104-8c0511bf-0942-4eb8-9bf1-1e572c0a37e4.png)

   - by State
   
     ![Filtered_State](https://user-images.githubusercontent.com/89308251/140255107-ef68a42e-d878-48a7-88cf-880b9eefda9b.png)

   - by Country

     ![Filtered_Country](https://user-images.githubusercontent.com/89308251/140255120-187e3232-4622-4e74-9f2d-683df1db031c.png)

   - by Shape

     ![Filtered_Shape](https://user-images.githubusercontent.com/89308251/140255128-6b9f23ad-9ec2-479c-8e0a-d668e89c6570.png)

   - by multiple criteria

     ![Filtered_multi](https://user-images.githubusercontent.com/89308251/140255131-c08cf67a-80d4-47fb-96b3-f2d6da1e7f7b.png)

 
## Summary 

- The drawbacks of this new webpage design:  
   - The data is very small and outdated which limits the search to only January 1st, 2010 through January 13th, 2010 and only in the United States.   
   - The input boxes are very simple. They are case sensitive and only work for lowercase words.
   - There is a lot of unclean data in the "Comments" columns that need to be cleaned.
   - There are no reset and filter buttons. 
      - The users have to click on the navigation bar to reset the webpage after filters have been applied to the table which is accomplished by linking to the homepage
      - The webpage will be updated with the search criteria after pressing "Enter" instead of pressing the "Filter" button

- The recommendations for further development:
   - This webpage would be more interesting and efficient if it had..
      - the most recent and cleaned data, not limited only to the United States, but worldwide about the UFO Sightings.
      - more navigation items on the NavBar such as "Home", "Lastest News", "Gallery", and "Videos" etc.
      - reset and filter buttons to assist users
   - To guide the users the input boxes should have... 
      - a Calendar selector for filtering on "Date" 
      - an optional drop down menu for filtering on "Shape"
      - auto fill  
      - case-insensitivity
         
