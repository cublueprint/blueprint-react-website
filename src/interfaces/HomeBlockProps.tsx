import {IProject} from "../static/json/projectDetails";

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
      border?: boolean;
    };
    style?: string[];
    buttons: {
      content: string;
      link: string;
    }[];
    slider?: IProject[];
  };
}
