// localStorage.clear()

const employees = [
    {
      id: '001',
      name: "Abhishek",
      email: "e@001.com",
      password: "123",
      active: true,
      image:"https://images.unsplash.com/photo-1590496552566-41aca09db352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHN1aXR8ZW58MHwxfDB8fHww",
      tasks: [
        {
          category: "Development",
          description: "Implement user authentication module",
          date: "2024-11-29",
          title: "User Authentication",
          newtask: true,
          failed: false,
          accept: true,
          completed: false,
        },
        {
          category: "Maintenance",
          description: "Fix bugs in the payment gateway",
          date: "2024-12-01",
          title: "Bug Fixing",
          newtask: false,
          failed: true,
          accept: false,
          completed: true,
        },
      ],
      taskCounts: {
        newtask: 1,
        failed: 1,
        accept: 1,
        completed: 2,
      },
    },
    {
      id: "002",
      name: "Rishiraj",
      email: "e@002.com",
      password: "123",
      active: true,
      image:"https://images.unsplash.com/photo-1548454782-15b189d129ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHN1aXR8ZW58MHwxfDB8fHww",
      tasks: [
        {
          category: "Design",
          description: "Create mockups for the new landing page",
          date: "2024-11-30",
          title: "Landing Page Mockups",
          newtask: true,
          failed: false,
          accept: true,
          completed: false,
        },
        {
          category: "Testing",
          description: "Perform load testing on the new server",
          date: "2024-12-02",
          title: "Load Testing",
          newtask: false,
          failed: true,
          accept: false,
          completed: true,
        },
      ],
      taskCounts: {
        newtask: 1,
        failed: 1,
        accept: 1,
        completed: 2,
      },
    },
    {
      id: "003",
      name: "Shrawan",
      email: "e@003.com",
      password: "123",
      active: true,
      image:"https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VpdHxlbnwwfDF8MHx8fDA%3D",
      tasks: [
        {
          category: "Research",
          description: "Analyze competitor products",
          date: "2024-11-28",
          title: "Competitor Analysis",
          newtask: true,
          failed: false,
          accept: true,
          completed: false,
        },
        {
          category: "Development",
          description: "Develop new features for the mobile app",
          date: "2024-12-03",
          title: "Mobile App Features",
          newtask: false,
          failed: true,
          accept: false,
          completed: true,
        },
      ],
      taskCounts: {
        newtask: 1,
        failed: 1,
        accept: 1,
        completed: 1,
      },
    },
    {
      id: "004",
      name: "Dharamraj",
      email: "e@004.com",
      password: "123",
      active: false,
      image:"https://images.unsplash.com/photo-1526304473520-84bf85c6d71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHN1aXR8ZW58MHwxfDB8fHww",
      tasks: [
        {
          category: "Support",
          description: "Resolve customer issues reported in the last week",
          date: "2024-11-29",
          title: "Customer Support",
          newtask: true,
          failed: false,
          accept: true,
          completed: false,
        },
        {
          category: "Training",
          description: "Prepare training material for new hires",
          date: "2024-12-05",
          title: "Training Material",
          newtask: false,
          failed: true,
          accept: false,
          completed: true,
        },
      ],
      taskCounts: {
        newtask: 1,
        failed: 1,
        accept: 1,
        completed: 1,
      },
    },
    {
      id: "005",
      name: "Siddhant",
      email: "e@005.com",
      password: "123",
      active: true,
      image:"https://images.unsplash.com/photo-1504791635568-fa4993808e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHwxfDB8fHww",
      tasks: [
        {
          category: "Marketing",
          description: "Plan and execute a social media campaign",
          date: "2024-11-30",
          title: "Social Media Campaign",
          newtask: true,
          failed: false,
          accept: true,
          completed: false,
        },
        {
          category: "Reporting",
          description: "Generate monthly performance reports",
          date: "2024-12-01",
          title: "Performance Reports",
          newtask: false,
          failed: true,
          accept: false,
          completed: true,
        },
      ],
      taskCounts: {
        newtask: 1,
        failed: 1,
        accept: 1,
        completed: 1,
      },
    },
  ];
  
  
  const admin = [ {
    email: "admin@1.com",
    password: "123"
  }];
  
  

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
    // console.log(localStorage.getItem('employees'));

  }

  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees, admin}
  }