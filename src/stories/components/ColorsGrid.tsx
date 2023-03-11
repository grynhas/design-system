import { colors } from '../../tokens/colors'

export function ColorsGrid () {
  return Object.entries(colors).map((color) => (
            <div key={color[0]} style={{ backgroundColor: color[1], padding: '2rem', border: '1px solid #000' }} >
                <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontFamily: 'monospace',
                      color: '#000'
                    }}
                >
                    <strong>${color[0]}</strong>
                    <span>{color[1]}</span>
                </div>

            </div>
  )
  )
}
