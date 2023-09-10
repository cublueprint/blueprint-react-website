import TeamsTitleImage from '../images/teams_title_block.png'; // ADD THIS IN LATER

import BlueprintPicture from '../images/blueprint.png';

import AboutPicture from '../images/about.svg';
import BeneficientLogo from '../images/beneficient.png';
import RefugeeCentreLogo from '../images/refugeecentre.png';
import UrbanMindsLogo from '../images/UMlogo.png';
import CIWHVLogo from '../images/CIWHV_logo.png';

const projectsPageContent = {
  titleBlock: {
    title: {
      text: 'Our Projects',
    },
    subtitle:
      'All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected.',
    image: {
      picture: TeamsTitleImage, // ADD THIS IN LATER
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'Visit our GitLab',
        link: '#', // ADD THIS IN LATER
      },
    ],
  },
  contentBlocks: [
    {
      style: ['left', 'cloudBlue'],
      title: {
        text: 'Current Projects 🗃️',
      },
      subtitle: 'Check out our projects!',
      image: {
        picture: AboutPicture,
        alt: 'about picture',
      },
      buttons: [
        {
          content: 'READ MORE',
          link: '/About',
        },
      ],
      slider: [
        {
          name: 'Beneficient',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '/#',
          gitlabLink: '/#',
          link: '/Projects/Beneficient',
          image: BeneficientLogo,
        },
        {
          name: 'Allo Canada',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '/#',
          gitlabLink: '/#',
          link: '/Projects/AlloCanada',
          image: RefugeeCentreLogo,
        },
        {
          name: 'Urban Minds',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '/#',
          gitlabLink: '/#',
          link: '/Projects/UrbanMinds',
          image: UrbanMindsLogo,
        },
      ],
    },
    {
      title: {
        text: 'Past Projects 🗃️',
      },
      subtitle: 'Check out our projects!',
      image: {
        picture: AboutPicture,
        alt: 'about picture',
      },
      buttons: [
        {
          content: 'READ MORE',
          link: '/About',
        },
      ],
      slider: [
        {
          name: 'PastProject1',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '#',
          gitlabLink: '#',
          link: '/Projects/PastProject1',
          image: BeneficientLogo,
        },
        {
          name: 'PastProject2',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '#',
          gitlabLink: '#',
          link: '/Projects/PastProject2',
          image: RefugeeCentreLogo,
        },
      ],
    },
  ],
};

export default projectsPageContent;
