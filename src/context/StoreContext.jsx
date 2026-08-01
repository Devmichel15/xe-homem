import { useCallback, useMemo, useState } from 'react'
import { StoreContext } from '@/context/store-context'

/**
 * Lightweight client-side store for cart + wishlist + overlay UI.
 * Kept framework-agnostic so it can later hydrate from Firebase Firestore
 * without touching the components that consume it.
 */
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [quickView, setQuickView] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item,
        )
      }
      return [...prev, { ...product, qty }]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id, qty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, qty) } : item))
        .filter((item) => item.qty > 0),
    )
  }, [])

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]))
  }, [])

  const value = useMemo(
    () => ({
      cart,
      cartCount: cart.reduce((count, item) => count + item.qty, 0),
      cartTotal: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
      addToCart,
      removeFromCart,
      updateQuantity,
      wishlist,
      toggleWishlist,
      isCartOpen,
      setIsCartOpen,
      quickView,
      setQuickView,
      searchOpen,
      setSearchOpen,
    }),
    [
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isCartOpen,
      quickView,
      searchOpen,
    ],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
