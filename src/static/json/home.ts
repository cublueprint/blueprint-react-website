import HomePicture from '../images/homepic.png';
import AboutPicture from '../images/aboutpic.png';

import BlueprintPicture from '../images/blueprint.png';

const homeContent = {
  titleBlock: {
    title: 'Tech for social good',
    subtitle:
      "We're a team of students at Carleton University that develop pro-bono apps for nonprofits and promote tech for social good.",

    image: {
      picture: HomePicture,
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'LEARN MORE >',
        link: 'About',
      },
      {
        content: 'APPLY >',
        link: 'Apply',
      }
    ],
  },
  aboutBlock: {
    title: 'About Us 💡',
    subtitle:
      "Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.",

    image: {
      picture: AboutPicture,
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'READ MORE >',
        link: 'About',
      }
    ],
  },
  projectsBlock: {
    title: 'Projects 🗃️',
    subtitle:
      "Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.",

    image: {
      picture: AboutPicture,
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'READ MORE >',
        link: 'About',
      }
    ],
    projects:[
      {
        name: 'Beneficient',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: 'Projects',
        image: BlueprintPicture
      },
      {
        name: 'Allo Canada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: 'Projects',
        image: BlueprintPicture
      },
      {
        name: 'Urban Minds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: 'Projects',
        image: BlueprintPicture
      }
    ]
  }
};

export default homeContent;
