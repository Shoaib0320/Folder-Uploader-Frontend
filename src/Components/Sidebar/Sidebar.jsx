// import { useEffect, useState } from "react"
// import {
//   Menu,
//   ChevronLeft,
//   LayoutDashboardIcon as Dashboard,
//   CalendarDays,
//   Bell,
//   Library,
//   Star,
//   ExpandIcon as Extension,
//   Settings,
//   HelpCircle,
//   LogOut,
//   ChevronDown,
// } from "lucide-react"
// import "./Sidebar.css"

// const primaryNavItems = [
//   {
//     title: "Dashboard",
//     icon: <Dashboard className="w-6 h-6" />,
//     url: "#",
//   },
//   {
//     title: "Services",
//     icon: <CalendarDays className="w-6 h-6" />,
//     url: "#",
//     dropdownItems: [
//       { title: "IT Consulting", url: "#" },
//       { title: "Cloud Solutions", url: "#" },
//       { title: "Mobile Apps", url: "#" },
//     ],
//   },
//   {
//     title: "Notifications",
//     icon: <Bell className="w-6 h-6" />,
//     url: "#",
//   },
//   {
//     title: "Resources",
//     icon: <Library className="w-6 h-6" />,
//     url: "#",
//   },
//   {
//     title: "Bookmarks",
//     icon: <Star className="w-6 h-6" />,
//     url: "#",
//     dropdownItems: [
//       { title: "Saved Tutorials", url: "#" },
//       { title: "Favorite Blogs", url: "#" },
//       { title: "Resource Guides", url: "#" },
//     ],
//   },
//   {
//     title: "Extensions",
//     icon: <Extension className="w-6 h-6" />,
//     url: "#",
//   },
//   {
//     title: "Settings",
//     icon: <Settings className="w-6 h-6" />,
//     url: "#",
//   },
// ]

// const secondaryNavItems = [
//   {
//     title: "Support",
//     icon: <HelpCircle className="w-6 h-6" />,
//     url: "#",
//   },
//   {
//     title: "Sign Out",
//     icon: <LogOut className="w-6 h-6" />,
//     url: "#",
//   },
// ]

// export default function Sidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(false)
//   const [openDropdowns, setOpenDropdowns] = useState([])

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 1024) {
//         setIsCollapsed(true)
//       }
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   const toggleDropdown = (title) => {
//     setOpenDropdowns((prev) => {
//       if (prev.includes(title)) {
//         return prev.filter((item) => item !== title)
//       }
//       return [...prev, title]
//     })
//   }

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed)
//     setOpenDropdowns([])
//   }

//   const renderNavItems = (items) => {
//     return items.map((item) => (
//       <li
//         key={item.title}
//         className={`nav-item ${item.dropdownItems ? "dropdown-container" : ""} ${openDropdowns.includes(item.title) ? "open" : ""}`}
//       >
//         <a
//           href={item.url}
//           className={`nav-link ${item.dropdownItems ? "dropdown-toggle" : ""}`}
//           onClick={(e) => {
//             if (item.dropdownItems) {
//               e.preventDefault()
//               toggleDropdown(item.title)
//             }
//           }}
//         >
//           {item.icon}
//           <span className="nav-label">{item.title}</span>
//           {item.dropdownItems && <ChevronDown className="dropdown-icon w-5 h-5" />}
//         </a>
//         {item.dropdownItems && (
//           <ul
//             className="dropdown-menu"
//             style={{
//               height: openDropdowns.includes(item.title) ? `${item.dropdownItems.length * 40}px` : "0",
//             }}
//           >
//             <li className="nav-item">
//               <a className="nav-link dropdown-title">{item.title}</a>
//             </li>
//             {item.dropdownItems.map((dropdownItem) => (
//               <li key={dropdownItem.title} className="nav-item">
//                 <a href={dropdownItem.url} className="nav-link dropdown-link">
//                   {dropdownItem.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))
//   }

//   return (
//     <>
//       <button className="sidebar-menu-button" onClick={toggleSidebar}>
//         <Menu className="w-6 h-6" />
//       </button>

//       <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
//         <header className="sidebar-header">
//           <a href="#" className="header-logo">
//             <img src={`https://upload.wikimedia.org/wikipedia/en/2/2e/Dawateislami_logo.png`} alt="Logo" />
//           </a>
//           <button className="sidebar-toggler" onClick={toggleSidebar}>
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//         </header>

//         <nav className="sidebar-nav">
//           <ul className="nav-list primary-nav">{renderNavItems(primaryNavItems)}</ul>

//           <ul className="nav-list secondary-nav">{renderNavItems(secondaryNavItems)}</ul>
//         </nav>
//       </aside>
//     </>
//   )
// }




"use client"

import { useEffect, useState } from "react"
import {
  Menu,
  ChevronLeft,
  LayoutDashboardIcon as Dashboard,
  CalendarDays,
  Bell,
  Library,
  Star,
  ExpandIcon as Extension,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react"
import "./Sidebar.css"

const primaryNavItems = [
  {
    title: "Dashboard",
    icon: <Dashboard className="nav-icon" />,
    url: "#",
  },
  {
    title: "Services",
    icon: <CalendarDays className="nav-icon" />,
    url: "#",
    dropdownItems: [
      { title: "IT Consulting", url: "#" },
      { title: "Cloud Solutions", url: "#" },
      { title: "Mobile Apps", url: "#" },
    ],
  },
  {
    title: "Notifications",
    icon: <Bell className="nav-icon" />,
    url: "#",
  },
  {
    title: "Resources",
    icon: <Library className="nav-icon" />,
    url: "#",
  },
  {
    title: "Bookmarks",
    icon: <Star className="nav-icon" />,
    url: "#",
    dropdownItems: [
      { title: "Saved Tutorials", url: "#" },
      { title: "Favorite Blogs", url: "#" },
      { title: "Resource Guides", url: "#" },
    ],
  },
  {
    title: "Extensions",
    icon: <Extension className="nav-icon" />,
    url: "#",
  },
  {
    title: "Settings",
    icon: <Settings className="nav-icon" />,
    url: "#",
  },
]

const secondaryNavItems = [
  {
    title: "Support",
    icon: <HelpCircle className="nav-icon" />,
    url: "#",
  },
  {
    title: "Sign Out",
    icon: <LogOut className="nav-icon" />,
    url: "#",
  },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState([])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsCollapsed(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title)
      }
      return [...prev, title]
    })
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
    setOpenDropdowns([])
  }

  const renderNavItems = (items) => {
    return items.map((item) => (
      <li
        key={item.title}
        className={`nav-item ${item.dropdownItems ? "dropdown-container" : ""} ${
          openDropdowns.includes(item.title) ? "open" : ""
        }`}
      >
        <a
          href={item.url}
          className={`nav-link ${item.dropdownItems ? "dropdown-toggle" : ""}`}
          onClick={(e) => {
            if (item.dropdownItems) {
              e.preventDefault()
              toggleDropdown(item.title)
            }
          }}
        >
          {item.icon}
          <span className="nav-label">{item.title}</span>
          {item.dropdownItems && <ChevronDown className="dropdown-icon" />}
        </a>
        {item.dropdownItems && (
          <ul
            className="dropdown-menu"
            style={{
              height: openDropdowns.includes(item.title) ? `${item.dropdownItems.length * 40}px` : "0",
            }}
          >
            <li className="nav-item">
              <a className="nav-link dropdown-title">{item.title}</a>
            </li>
            {item.dropdownItems.map((dropdownItem) => (
              <li key={dropdownItem.title} className="nav-item">
                <a href={dropdownItem.url} className="nav-link dropdown-link">
                  {dropdownItem.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))
  }

  return (
    <>
      <button className="sidebar-menu-button" onClick={toggleSidebar}>
        <Menu className="menu-icon" />
      </button>

      <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <header className="sidebar-header">
          <a href="#" className="header-logo">
            <img src={`https://upload.wikimedia.org/wikipedia/en/2/2e/Dawateislami_logo.png`} alt="Logo" />
          </a>
          <button className="sidebar-toggler" onClick={toggleSidebar}>
            <ChevronLeft className="toggler-icon" />
          </button>
        </header>

        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">{renderNavItems(primaryNavItems)}</ul>

          <ul className="nav-list secondary-nav">{renderNavItems(secondaryNavItems)}</ul>
        </nav>
      </aside>
    </>
  )
}

