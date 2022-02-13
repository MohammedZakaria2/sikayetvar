import Navigation from './navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </main>
  );
}

export default App;

// TODO: add authentication functionality
// TODO: use styled components for styling
