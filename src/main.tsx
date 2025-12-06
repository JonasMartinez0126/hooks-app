import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Toaster } from 'sonner'
//import { ClientInformation } from './08-use-suspense/ClientInformation'
//import { getUserAction } from './08-use-suspense/api/get-user.action'
//import { InstagromApp } from './07-useOptimistic/InstagromApp'
//import { MemoCounter } from './06-memos/MemoCounter'
//import { MemoHook } from './06-memos/MemoHook';
//import { NewScrambleWords } from './05-useReducer/NewScrambleWords'
//import { ScrambleWords } from './05-useReducer/ScrambleWords'
//import { TasksApp } from './05-useReducer/TaskApp'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
//import { HooksApp } from './HooksApp'
//import { TrafficLight } from './01-useState/TRafficLight'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
//import { PokemonPage } from './03-examples/PokemonPage'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <NewScrambleWords /> */}
    {/*<MemoHook /> */}
    {/*<MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className='bg-gradient flex flex-col'>
          <h1 className='text-2xl'>Cargando...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
