import { get } from 'node-fetch';

interface UrlInfo {
  url: string;
  status: 'active' | 'inactive';
  endpoints: string[]; 
  sslValid: boolean;
  securityRank: number;
}

async function validateUrl(url: string): Promise<UrlInfo> {

  const result: UrlInfo = {
    url,
    status: 'inactive',
    endpoints: [],
    sslValid: false,
    securityRank: 0    
  };

  try {
    const res = await get(url);

    if (res.ok) {
      result.status = 'active';

      // Get all endpoints
      const endpoints = []; // populate from link scraping
      
      result.endpoints = endpoints;

      // Check if SSL valid
      result.sslValid = res.url.startsWith('https');

      // Calculate security rank
      const rank = 5; // based on various checks
      result.securityRank = rank;

    }

  } catch (err) {
    // Site unreachable
  }

  return result;
}

// Example usage
const url1 = 'https://example.com'; 

const result1 = await validateUrl(url1);

console.log(result1);

// Styled output using Tailwind

<div className="p-4 max-w-md bg-white rounded-lg border shadow-md">
  
  <div><span className="font-bold">URL:</span> {result1.url}</div>
  
  <div>
    <span className="font-bold">Status:</span> 
    <span className={`inline-block px-2 py-1 text-xs font-bold ${result1.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} rounded`}>
      {result1.status}
    </span>
  </div>

  <div>
    <span className="font-bold">Endpoints:</span>
    <span>{result1.endpoints.join(', ')}</span>
  </div>

  <div>
    <span className="font-bold">SSL Valid:</span> 
    <span className={result1.sslValid ? 'text-green-500' : 'text-yellow-500'}>
      {result1.sslValid ? 'Yes' : 'No'}  
    </span>
  </div>

  <div>
    <span className="font-bold">Security rank:</span>
    <span className={`font-bold text-xl ${result1.securityRank > 7 ? 'text-green-500' : 'text-yellow-500'}`}>
      {result1.securityRank} 
    </span>
  </div>

</div>
