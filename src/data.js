const cards = [
  {
    id: 1,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  },
  {
    id: 2,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  },
  {
    id: 3,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://image.shutterstock.com/image-photo/red-apple-on-white-background-600w-158989157.jpg",
  },
  {
    id: 4,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://image.shutterstock.com/image-photo/red-apple-on-white-background-600w-158989157.jpg",
  },
  {
    id: 5,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://cdn.shopify.com/s/files/1/1740/4747/products/Orange_Juice_Perth_CBD_2048x.jpg?v=1586142573",
  },
  {
    id: 6,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://cdn.shopify.com/s/files/1/1740/4747/products/Orange_Juice_Perth_CBD_2048x.jpg?v=1586142573",
  },
  {
    id: 7,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2: "https://www.thepacker.com/sites/default/files/Grapes_Red_web_.jpg",
  },
  {
    id: 8,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2: "https://www.thepacker.com/sites/default/files/Grapes_Red_web_.jpg",
  },
  {
    id: 9,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2019/07/water.jpg",
  },
  {
    id: 10,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2019/07/water.jpg",
  },
  {
    id: 11,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "http://www.lima-europe.eu/wp-content/uploads/2017/05/Strawberry.jpg",
  },
  {
    id: 12,
    name: "guess",
    image:
      "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA3XFxcLzAxMTMwOTQ5XFxcL2ZlYXQyMi0xMDI0eDU3Ni5wbmdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yZjNjN2ViZjI1NGU5NmYxZDBlN1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIxNzRjN2EyYmJhNDVmNjI4YWU5YzU1NTEyZGU0MTQzYTQ0ZTg5ZDM0In0=/feat22-1024x576.png",
    image2:
      "http://www.lima-europe.eu/wp-content/uploads/2017/05/Strawberry.jpg",
  },
];
export default cards;
