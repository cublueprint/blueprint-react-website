export interface HomeBlockProps {
    content: {
      title: {
        text: string;
        style?: string;
      };
      subtitle: string;
      image: {
        picture: any;
        alt: string;
      };
      style?: string;
      buttons:{
        content: string;
        link: string;
      }[];
      projects?: {
        name: string;
        description: string;
        link: string;
        image: any;
      }[];
    };
  }