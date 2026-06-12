export function constructMetadata({
  title = "Malik Smitth ",
  description = "Design Engineer",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@KING_IN_JUNGLE",
    },
    icons,
    metadataBase: new URL("https://agency-website-abdullah.vercel.app/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
