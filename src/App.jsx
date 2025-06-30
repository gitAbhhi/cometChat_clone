import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeroForm } from './components/HeroForm'
import { CustormerSection } from './components/CustormerSection'
import { TitleBlock } from './components/TitleBlock'
import { ListSection } from './components/ListSection'
import { TitleBlock2 } from './components/TitleBlock2'
import { ListSection2 } from './components/ListSection2'
import { FaqSection } from './components/FaqSection'
import { PreFooter } from './components/PreFooter'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <HeroForm/>
    <CustormerSection/>
    <TitleBlock/>
    <ListSection/>
    <TitleBlock2/>
    <ListSection2/>
    <FaqSection/>
    <PreFooter/>
    <Footer/>
    </>
  )
}

export default App
