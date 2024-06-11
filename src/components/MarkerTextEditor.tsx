import { useSearchParams } from "react-router-dom";

function paramsToObject(searchParams: URLSearchParams) {
  const result: { [key: string]: string} = {}
  for(const [key, value] of searchParams.entries()) {
    result[key] = value;
  }
  return result;
}

const MarkerTextEditor = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      const currentParams = paramsToObject(prev);
      return {
        ...currentParams,
        name: e.target.value
      }
    });
  };

  return (
    <input
      placeholder="Escriba aquí..."
      value={searchParams.get('name')?.toString() || ''}
      onChange={handleChange}
      autoFocus
    />
  )
}

export default MarkerTextEditor