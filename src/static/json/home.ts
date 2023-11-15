import HomePicture from '../images/homepic.png';
import AboutPicture from '../images/about.svg';
import ApplyPicture from '../images/apply.svg';
import ContactPicture from '../images/contact.svg'

import BlueprintPicture from '../images/blueprint.png';

import BeneficientLogo from '../images/beneficient.png';
import RefugeeCentreLogo from '../images/refugeecentre.png';
import UrbanMindsLogo from '../images/UMlogo.png';
import CIWHVLogo from '../images/CIWHV_logo.png';

const homeContent = {
  titleBlock: {
    title: 'Tech for social good',
    subtitle: "We're a team of students at Carleton University that develop pro-bono apps for nonprofits and promote tech for social good.",

    image: {
      picture: HomePicture,
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'LEARN MORE',
        link: '/About',
      },
      {
        content: 'APPLY',
        link: '/Apply',
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
        content: 'READ MORE',
        link: '/About',
      }
    ],
    style: 'right'
  },
  projectsBlock: {
    title: 'Projects 🗃️',
    subtitle:
    "Check out our projects!",
    image: {
      picture: AboutPicture,
      alt: 'about picture',
    },
    buttons: [
      {
        content: 'READ MORE',
        link: '/About',
      }
    ],
    slider:[
      {
        name: 'Beneficient',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: '/Projects/Beneficient',
        image: BeneficientLogo
      },
      {
        name: 'Allo Canada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: '/Projects/AlloCanada',
        image: RefugeeCentreLogo
      },
      {
        name: 'Urban Minds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultrices. Sed vitae eros quis nisl aliquam ultrices.',
        link: '/Projects/UrbanMinds',
        image: UrbanMindsLogo
      }
    ]
  },
  getInvolvedBlock: {
    title: 'Get Involved 🤝',
    subtitle:
      "Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.",
    image: {
      picture: ApplyPicture,
      alt: 'apply picture',
    },
    buttons: [{
      content: 'APPLY',
      link: '/Apply',
    }],
    style: 'left'
  },
  contactUsBlock: {
    title: 'Contact Us 📧',
    subtitle:
      "Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.",
    image: {
      picture: ContactPicture,
      alt: 'contact picture',
    },
    buttons: [{
      content: 'CONTACT US',
      link: '/Contact',
    }],
    style: 'right'
  },
};

export default homeContent;
