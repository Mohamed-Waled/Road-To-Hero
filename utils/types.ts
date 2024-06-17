export type story_chapter = {
  arc: string;
  chapter: string;
  part: string;
  chapterName: string;
  content: string[];
  author: string;
  authorName: string;
  createdAt: number;
};

export type story_chapters = {
  arc: string;
  chapters: [
    {
      chapter: string;
      parts: [
        {
          part: string;
          chapterName: string;
          content: string[];
          author: string;
          authorName: string;
          createdAt: number;
        },
      ];
    },
  ];
};

export type story_chapters_modified = {
  arc: string;
  chapters: chapters[];
};

export type parts = {
  part: string;
  chapterName: string;
  content: string[];
  author: string;
  authorName: string;
  createdAt: number;
  read: boolean;
};

export type chapters = {
  chapter: string;
  parts: parts[];
};
