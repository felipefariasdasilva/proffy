import React from 'react'
import PageHeader from './../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem';
import './style.css'

export default function TeacherList(){

    return (
       
        <div id="page-teacher-list" className="container">

           <PageHeader title="Estes são os proffys disponíveis">
               
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"></input>
                    </div>

                </form>

           </PageHeader>

           <main>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
           </main>

        </div>
    )
}