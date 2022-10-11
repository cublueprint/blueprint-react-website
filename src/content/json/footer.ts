import linkedinIcon from '../images/linkedin-icon.webp';
import igIcon from '../images/ig-icon.webp';
import fbIcon from '../images/fb-icon.webp';
import youtubeIcon from '../images/youtube-icon.webp';
import blueprintIcon from '../images/blueprint_banner_negative.webp';

const footerJson = {
  blueprintIcon: blueprintIcon,

  social: [
    {
      key: 1,
      img: linkedinIcon,
      url: 'https://www.linkedin.com/company/cublueprint/about/',
    },
    {
      key: 2,
      img: igIcon,
      url: 'https://www.instagram.com/cublueprint/?hl=en',
    },
    {
      key: 3,
      img: fbIcon,
      url: 'https://www.facebook.com/cublueprint/',
    },
    {
      key: 4,
      img: youtubeIcon,
      url: 'https://www.youtube.com/channel/UCVp-L_xBDxORfU_-lXCs_6g/videos?view=0',
    },
  ],

  columns: [
    {
      title: 'ABOUT',
      lis: [
        { link: '#', text: 'item' },
        { link: '#', text: 'item' },
        { link: '#', text: 'item' },
      ],
    },
    {
      title: 'PROJECTS',
      lis: [
        { link: '#', text: 'Current Projects' },
        { link: '#', text: 'Past Projects' },
        { link: '#', text: 'Apply' },
      ],
    },
    {
      title: 'TEAM',
      lis: [
        { link: '#', text: 'Beneficent' },
        { link: '#', text: 'Urban Minds' },
        { link: '#', text: 'Blueprint Website' },
        { link: '#', text: 'Join Us' },
      ],
    },
    {
      title: 'CONTACT',
      lis: [
        { link: '#', text: 'item' },
        { link: '#', text: 'item' },
        { link: '#', text: 'item' },
      ],
    },
    {
      title: 'ABOUT',
      lis: [
        { link: '#', text: 'item' },
        { link: '#', text: 'item' },
        { link: '#', text: 'item' },
      ],
    },
  ],
  // End Contact Section ---------------
};

export default footerJson;
