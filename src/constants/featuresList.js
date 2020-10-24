import React from 'react'
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AllOutIcon from '@material-ui/icons/AllOut';
/*
  - enables users to browse community recipes
  - enables users to post recipes
  - enables users to see their posts in their dashboard
  - enables users to their preferred language
*/
export const aboutRolesData = [
  {
    title: "Browsing",
    icon: () => { return <CodeIcon style={{fontSize: 80}} />},
    titleText: "DevOps Engineer",
    desc: "I love how DevOps automates QA and Release Engineering, but still pushes quality code.",
    useDesc: "CI/CD Infrastructure",
    toolNamesList: [
      "Jenkins", "GitLab", "Docker", "Kubernetes", "Vagrant"
    ]
  },
  {
    title: "Posting",
    icon: () => { return <DeveloperModeIcon style={{fontSize: 80}} /> },
    titleText: "FrontEnd Dev",
    desc: "I value how frontend showcases my work with clean state management and fast load times",
    useDesc: "Web & Mobile Apps",
    toolNamesList: [
      "React", "Vue.js", "CSS3 & Flexbox", "Next & Nuxt", "Flutter"
    ]
  },
  {
    title: "Dashboard View",
    icon: () => { return <AllOutIcon style={{fontSize: 80}} /> },
    titleText: "Agile Goal Setter",
    desc: "I prioritize using Agile in projects for efficiency, accountability, and to progress towards SMART goals (especially in groups).",
    useDesc: "Agile in Practice",
    toolNamesList: [
      "Jira", "Scrum for Trello", "Kanban", "Slack Bots", "Sprint Review"
    ]
  },
  
  {
    title: "Language",
    icon: () => { return <AllOutIcon style={{fontSize: 80}} /> },
    titleText: "Agile Goal Setter",
    desc: "I prioritize using Agile in projects for efficiency, accountability, and to progress towards SMART goals (especially in groups).",
    useDesc: "Agile in Practice",
    toolNamesList: [
      "Jira", "Scrum for Trello", "Kanban", "Slack Bots", "Sprint Review"
    ]
  }
]