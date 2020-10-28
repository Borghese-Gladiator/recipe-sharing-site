import React from 'react'
import Container from '@material-ui/core/Container';
import HorizontalGridList from '../../components/HorizontalGridList'
import { messagesData } from '../../constants/historyDashboard'

export default function HistoryDashboard() {
  return (
    <div>
      <h2>HISTORY</h2>
      <Container>
        <h4>Recently Viewed</h4>
        <HorizontalGridList size={10} tileData={messagesData} />
      </Container>
      <Container>
        <h4>Liked Recipes</h4>
        <HorizontalGridList size={10} tileData={messagesData} />
      </Container>
      <div>
        <h4>My Posts</h4>
        <HorizontalGridList size={10} tileData={messagesData} />
      </div>
      <div>
        <h4>Messages</h4>
        <HorizontalGridList size={10} tileData={messagesData} />
      </div>
    </div>
  )
}