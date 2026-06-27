// Automatically import every file inside each folder

const art = import.meta.glob("../assets/gallery/art/*", {
    eager: true,
    import: "default",
  });
  
  const martial = import.meta.glob("../assets/gallery/martial/*", {
    eager: true,
    import: "default",
  });
  
  const mathematics = import.meta.glob("../assets/gallery/mathematics/*", {
    eager: true,
    import: "default",
  });
  
  const music = import.meta.glob("../assets/gallery/music/*", {
    eager: true,
    import: "default",
  });
  
  const nature = import.meta.glob("../assets/gallery/nature/*", {
    eager: true,
    import: "default",
  });
  
  const sustainability = import.meta.glob("../assets/gallery/sustainability/*", {
    eager: true,
    import: "default",
  });
  
  const community = import.meta.glob("../assets/gallery/community/*", {
    eager: true,
    import: "default",
  });
  
  function convert(obj) {
    return Object.entries(obj)
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([path, src]) => ({
        src,
        type: path.endsWith(".mp4") ? "video" : "image",
      }));
  }
  
  export const gallerySections = [
    {
      title: "Art",
      description:
        "Painting, crafts, murals and creative exploration encourage children to express themselves freely and see the world with curiosity.",
      media: convert(art),
    },
  
    {
      title: "Martial Arts",
      description:
        "Discipline, confidence and resilience are built through movement, balance, respect and consistent practice.",
      media: convert(martial),
    },
  
    {
      title: "Mathematics",
      description:
        "Mathematics is approached through curiosity, logical thinking and discovering patterns rather than memorisation.",
      media: convert(mathematics),
    },
  
    {
      title: "Music",
      description:
        "Rhythm, melody and shared performances become another language through which children connect with one another.",
      media: convert(music),
    },
  
    {
      title: "Nature Learning",
      description:
        "The mountains themselves become the classroom, where every walk, observation and season offers a lesson.",
      media: convert(nature),
    },
  
    {
      title: "Sustainability",
      description:
        "Repairing, reusing and creating with intention helps children understand their relationship with the environment.",
      media: convert(sustainability),
    },
  
    {
      title: "Community",
      description:
        "Learning grows strongest when shared—with families, volunteers, teachers and the wider village community.",
      media: convert(community),
    },
  ];