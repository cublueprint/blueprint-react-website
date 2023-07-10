export interface HomeBlockProps {
    content: {
      title: string;
      subtitle: string;
      image: {
        picture: any;
        alt: string;
      };
      buttons: {
        content: string;
        link: string;
      }[];
    };
  }