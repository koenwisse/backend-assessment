"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "players",
      [
        {
          name: "Overmars",
          nationality: "NL",
          age: 25,
          profilePicture:
            "https://static.wikia.nocookie.net/afcajax/images/9/9e/1992%29MarcOvermars.jpg/revision/latest/scale-to-width-down/300?cb=20140413211131&path-prefix=nl",
          retired: true,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Davids",
          nationality: "NL",
          age: 22,
          profilePicture:
            "https://m.media-amazon.com/images/M/MV5BOTNiYjc3NWUtYzgwZS00MTEyLWEyNDUtNzQ1ODIzOTEwYWQyXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
          retired: true,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Robben",
          nationality: "NL",
          age: 20,
          profilePicture:
            "https://static.nieuwsblad.be/Assets/Images_Upload/2018/05/11/6dfeb1de-4808-11e8-8040-2d379fdf949e_web_scale_0.0681597_0.0681597__.jpg?maxheight=280&maxwidth=400",
          retired: false,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cantona",
          nationality: "FR",
          age: 23,
          profilePicture:
            "https://lh3.googleusercontent.com/proxy/oe7WtEz_0nUyeJuF8mB08dRXAlkwcyCx5gw298QgtnQYw4Ub-yvmpCM1Ara6CSF48zoFaPXTct3ge5SU6XgKGTxmLHUo76EA6EAL_tEzkp6kqw9-GWQ2CDHiK5OgyVA73JYXNMw1pcLMltQ",
          retired: true,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldo",
          nationality: "BR",
          age: 21,
          profilePicture:
            "https://cdn.britannica.com/48/142848-050-2A6FC569/Ronaldo-2004.jpg",
          retired: true,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldo",
          nationality: "PT",
          age: 20,
          profilePicture:
            "https://www.biography.com/.image/t_share/MTc5OTQ5OTg4NjY5ODI2MTcw/gettyimages-971463110.jpg",
          retired: false,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Henry",
          nationality: "FR",
          age: 24,
          profilePicture:
            "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/henry_1.jpg?itok=rlJwSnpg",
          retired: true,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stam",
          nationality: "NL",
          age: 30,
          profilePicture:
            "https://pbs.twimg.com/profile_images/1619499122/stamimg_400x400.jpg",
          retired: true,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puyol",
          nationality: "ES",
          age: 28,
          profilePicture:
            "https://thumbs.dreamstime.com/b/carles-puyol-van-fc-barcelona-21863310.jpg",
          retired: true,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Figo",
          nationality: "PT",
          age: 26,
          profilePicture: "",
          retired: true,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zidane",
          nationality: "FR",
          age: 27,
          profilePicture:
            "https://media.gettyimages.com/photos/portrait-of-zinedine-zidane-of-real-madrid-prior-to-the-uefa-league-picture-id51805384",
          retired: true,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barthez",
          nationality: "FR",
          age: 38,
          profilePicture:
            "https://lthumb.lisimg.com/038/16458038.jpg?width=280&sharpen=true",
          retired: true,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Messi",
          nationality: "AR",
          age: 19,
          profilePicture:
            "https://pbs.twimg.com/profile_images/1433670347312697353/xIja1VHK_400x400.jpg",
          retired: false,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maradona",
          nationality: "AR",
          age: 37,
          profilePicture: "",
          retired: true,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Raul",
          nationality: "ES",
          age: 29,
          profilePicture:
            "https://wenskaarsje.nl/wp-content/uploads/2020/11/maradonaa.jpg",
          retired: true,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thuram",
          nationality: "FR",
          age: 28,
          profilePicture:
            "https://griotmag.com/wp-content/uploads/2021/01/griot-mag-lilian-thuram-art-afrique-louis.vuitton-foundation-racism-in-sport-contemporary-african-art.jpg",
          retired: true,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maldini",
          nationality: "IT",
          age: 40,
          profilePicture:
            "https://worldinsport.com/wp-content/uploads/2016/07/paolo-maldini1.jpg",
          retired: true,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cannavaro",
          nationality: "IT",
          age: 31,
          profilePicture:
            "https://s.ndtvimg.com/images/stories/fabio_cannavaro_300.jpg",
          retired: true,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Del Piero",
          nationality: "IT",
          age: 27,
          profilePicture:
            "https://s.hs-data.com/bilder/spieler/gross/1355.jpg?fallback=png",
          retired: true,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Casillas",
          nationality: "ES",
          age: 26,
          profilePicture:
            "https://upload.wikimedia.org/wikipedia/commons/0/0a/Iker_Casillas_2.jpg",
          retired: true,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldinho",
          nationality: "BR",
          age: 23,
          profilePicture:
            "https://fhm.nl/wp-content/uploads/2021/03/130747162_828891007686893_7736890549059403118_n-e1615820795930-375x270.jpg",
          retired: true,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("players", null, {});
  },
};
