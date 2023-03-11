import '../style/style.css'
interface TokenGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid ({ tokens, hasRemValue = false }: TokenGridProps) {
  function remToPixels (rem: string) {
    const remValue = parseFloat(rem)
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return `${remValue * baseFontSize}px`
  }
  return (
    <table className='tokens-grid'>
        <thead>
            <tr>
                <th>Token</th>
                <th>Value</th>
                {hasRemValue && <th>Pixels</th>}
            </tr>
        </thead>
        <tbody>
            {Object.entries(tokens).map((token) => (
                <tr key={token[0]}>
                    <td>${token[0]}</td>
                    <td>{token[1]}</td>
                    {hasRemValue && <td>{remToPixels(token[1])}</td>}
                </tr>
            ))}
        </tbody>
    </table>
  )
}
