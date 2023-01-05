
      function udskrivAlle(){
       const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
       ];
        let html=`<table>`;
        blogs.forEach(blog => { 
           html+="<tr><td>";
           html+=blog.title;
           html+="</td>";
           html+="<td>";
           html+=blog.snippet;
           html+="</td></tr>";
           console.log(blog.title);
           console.log(blog.snippet);
        });
        html+="</table>";
        //var x = document.getElementById("tekstfelt");
        document.querySelector("p").innerHTML = html;
        //document.getElementById("tekstfelt2").innerHTML="Hej";
      }

      
      async function getBlogs() {
         try {
             let res = await fetch('http://localhost:3000/blogs');
             return await res.json();
         } catch (error) {
             console.log(error);
         }
      }

     async function udskrivAlle1(){
         let data = await getBlogs();
         console.log(data);
         let html=`<table>`;
         data.forEach(blog => { 
           html+=`<tr><td>`;
           html+=blog.title;
           html+="</td>";
           html+=blog.author;
           html+="<td>";
           html+="</td></tr>";
         });
      html+="</table>";
      //var x = document.getElementById("tekstfelt");
      document.querySelector("p").innerHTML = html;
      //document.getElementById("tekstfelt2").innerHTML="Hej";
  }


