module.exports = {
  siteMetadata: {
    title: `Théâtres Parisiens`,
    siteUrl: `http://theatres-parisiens.fr`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `theatres`,
        path: `${__dirname}/theatres/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-92277502-3",
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace"
        },
        plugins: [
          "gatsby-tinacms-remark",
          {
            resolve: "gatsby-tinacms-git",
            options: {
              defaultCommitMessage: "Edited with TinaCMS",
              defaultCommitName: "TinaCMS",
              defaultCommitEmail: "git@tinacms.org",
              pushOnCommit: true,
              gitRemote: "git@github.com:phacks/theatres-parisiens.git",
              sshKey: process.env.SSH_KEY
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`
  ]
};
