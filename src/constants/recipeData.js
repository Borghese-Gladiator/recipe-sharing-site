import React from 'react'
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AllOutIcon from '@material-ui/icons/AllOut';

export const recipeData = [
  {
    title: "DevOps",
    icon: () => { return <CodeIcon style={{fontSize: 80}} />},
    titleText: "DevOps Engineer",
    desc: "I love how DevOps automates QA and Release Engineering, but still pushes quality code.",
    useDesc: "CI/CD Infrastructure",
    toolNamesList: [
      "Jenkins", "GitLab", "Docker", "Kubernetes", "Vagrant"
    ]
  },
  {
    title: "FrontEnd",
    icon: () => { return <DeveloperModeIcon style={{fontSize: 80}} /> },
    titleText: "FrontEnd Dev",
    desc: "I value how frontend showcases my work with clean state management and fast load times",
    useDesc: "Web & Mobile Apps",
    toolNamesList: [
      "React", "Vue.js", "CSS3 & Flexbox", "Next & Nuxt", "Flutter"
    ]
  },
  {
    title: "Agile",
    icon: () => { return <AllOutIcon style={{fontSize: 80}} /> },
    titleText: "Agile Goal Setter",
    desc: "I prioritize using Agile in projects for efficiency, accountability, and to progress towards SMART goals (even in groups).",
    useDesc: "Agile in Practice",
    toolNamesList: [
      "Jira", "Scrum for Trello", "Kanban", "Slack Bots", "Sprint Review"
    ]
  }
]