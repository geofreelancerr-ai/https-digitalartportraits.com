import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import SiteShell from "./components/SiteShell";
import AdminOrders from "./pages/AdminOrders";
import AdminDownloads from "./pages/AdminDownloads";
import Artwork from "./pages/Artwork";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/catalog"} component={Catalog} />
      <Route path={"/artwork/:handle"} component={Artwork} />
      <Route path={"/checkout"} component={Checkout} />
      <Route path={"/order/:orderNumber"} component={OrderConfirmation} />
      <Route path={"/owner/orders"} component={AdminOrders} />
      <Route path={"/owner/downloads"} component={AdminDownloads} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <CartProvider><SiteShell><Router /></SiteShell></CartProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
