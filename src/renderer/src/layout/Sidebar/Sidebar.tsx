import TopPortion from './components/TopPortion'
import MiddlePortion from './components/MiddlePortion/MiddlePortion'
import BottomPortion from './components/BottomPortion'

function Sidebar(): React.JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        width: '10rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--color-sidebar)'
      }}
    >
      <TopPortion />
      <MiddlePortion />
      <BottomPortion />
    </div>
  )
}

export default Sidebar
