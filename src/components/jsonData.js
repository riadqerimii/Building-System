export const fetchData = async () => {
  const getImage = async (path) => {
    const module = await import(path);
    return module.default;
  };

  return {
    All: {
      firstItem: {
        imagePath: await getImage("../components/Pages/Img/Construction 1.jpg"),
        name: "John",
        Job: "worker",
        linkOne: "./",
        linkTwo: "./",
      },
      This: {
        imagePath: await getImage("../components/Pages/Img/Haulage.jpg"),
        name: "Ready",
        Job: "worker",
        linkOne: "./",
        linkTwo: "./",
      },
      secondItem: {
        imagePath: await getImage("../components/Pages/Img/Construction 2.jpg"),
        name: "Harry",
        Job: "Ceo",
        linkOne: "./",
        linkTwo: "./",
      },
      thirdItem: {
        imagePath: await getImage("../components/Pages/Img/Hero-1.jpg"),
        name: "Olivia",
        Job: "Manager",
        linkOne: "./",
        linkTwo: "./",
      },
    },
    Jobs: {
      firstItem: {
        imagePath: await getImage("../components/Pages/Img/Construction 2.jpg"),
        name: "Greta",
        Job: "Manager",
        linkOne: "./",
        linkTwo: "./",
      },
      That: {
        imagePath: await getImage("../components/Pages/Img/Hero-1.jpg"),
        name: "Ready",
        Job: "worker",
        linkOne: "./",
        linkTwo: "./",
      },
      Explain: {
        imagePath: await getImage("../components/Pages/Img/Haulage.jpg"),
        name: "Ready",
        Job: "worker",
        linkOne: "./",
        linkTwo: "./",
      },
      secondItem: {
        imagePath: await getImage("../components/Pages/Img/Construction 1.jpg"),
        name: "Jessica",
        Job: "Accountant",
        linkOne: "./",
        linkTwo: "./",
      },
    },
    Project: {
      firstItem: {
        imagePath: await getImage("../components/Pages/Img/Construction 1.jpg"),
        name: "Project 1",
        Job: "Road 44",
        linkOne: "./",
        linkTwo: "./",
      },
      secondItem: {
        imagePath: await getImage("../components/Pages/Img/Haulage.jpg"),
        name: "Project 2",
        Job: "some project",
        linkOne: "./",
        linkTwo: "./",
      },
    },
    New: {
      firstItem: {
        imagePath: await getImage("../components/Pages/Img/Hero-1.jpg"),
        name: "Project 1",
        Job: "Road 44",
        linkOne: "./",
        linkTwo: "./",
      },
      secondItem: {
        imagePath: await getImage("../components/Pages/Img/Haulage.jpg"),
        name: "Project 2",
        Job: "some project",
        linkOne: "./",
        linkTwo: "./",
      },
    },
  };
};
