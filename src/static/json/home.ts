import HomePicture from '../images/homepic.png';
import AboutPicture from '../images/about.svg';
import ApplyPicture from '../images/apply.svg';
import ContactPicture from '../images/contact.svg'

import BlueprintPicture from '../images/blueprint.png';

const homeContent = {
  titleBlock: {
    title: {
      text: 'Tech for social good'
    },
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
    title: {
      text: 'About Us 💡',
      style: 'skyBlue'
    },
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
    style: ['right', "cloudBlue"]
  },
  projectsBlock: {
    title: {
      text: 'Projects 🗃️'
    },
    subtitle:
    "Check out our projects!",
    image: {
      picture: AboutPicture,
      alt: 'about picture',
    },
    buttons: [
      {
        content: 'READ MORE >',
        link: 'About',
      }
    ],
    slider:[
      {
        name: 'Beneficient',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: 'Projects/Beneficient',
        image: BlueprintPicture
      },
      {
        name: 'Allo Canada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: 'Projects/AlloCanada',
        image: BlueprintPicture
      },
      {
        name: 'Urban Minds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: 'Projects/UrbanMinds',
        image: BlueprintPicture
      }
    ]
  },
  getInvolvedBlock: {
    title: {
      text: 'Get Involved 🤝',
      style: 'skyBlue'
    },
    subtitle:
      "Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.",
    image: {
      picture: ApplyPicture,
      alt: 'apply picture',
    },
    buttons: [{
      content: 'APPLY >',
      link: 'Apply',
    }],
    style: ['left', "cloudBlue"]
  },
  contactUsBlock: {
    title: {
      text: 'Contact Us 📧',
      style: 'skyBlue'
    },
    subtitle:
      "Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.",
    image: {
      picture: ContactPicture,
      alt: 'contact picture',
    },
    buttons: [{
      content: 'CONTACT US >',
      link: 'Contact',
    }],
    style: ['right', "cloudBlue"]
  },
};

export default homeContent;
