import TopPortion from './components/TopPortion'
import MiddlePortion from './components/MiddlePortion'
import BottomPortion from './components/BottomPortion'

function Sidebar(): React.JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        width: '10rem',
        border: '1px solid red',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <TopPortion />
      <MiddlePortion />
      <BottomPortion />
    </div>
  )
}

export default Sidebar
