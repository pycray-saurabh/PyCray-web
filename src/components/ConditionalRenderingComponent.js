import React, { useState } from 'react';
import './ConditionalRenderingComponent.css';
import mspic from '../assets/mAndS.png'
import inforch from '../assets/infraorch.png'
import db from '../assets/db.png'
import lgmng from '../assets/logmngment.png'
import cloudservs from '../assets/cloudserv.png'
import apipic from '../assets/API.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import native from '../assets/native.png'
import angular from '../assets/angular.png'
import flutter from '../assets/flutter.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import laravel from '../assets/laravel.png'
import django from '../assets/django.png'
import figma from '../assets/figma.png'
import kafka from '../assets/kafka.png'
import rabbitmq from '../assets/rabbitmq.png'
import sqs from '../assets/sqs.png'
import twilio from '../assets/twilio.png' 
import terraform from '../assets/terraform.png'
import docker from '../assets/docker.png'
import kubernetes from '../assets/kubernetes.png'
import airflow from '../assets/airflow.png'
import mongodb from '../assets/mongodb.png'
import Mysql from '../assets/Mysql.png'
import postgreSQL from '../assets/postrgreSQL.png'
import oracle from '../assets/oracle.png'
import redis from '../assets/redis.png'
import elasticsearch from '../assets/elasticsearch.png'
import logstash from '../assets/logstash.png'
import kibana from '../assets/kibana.png'
import grafana from '../assets/grafana.png'
import aws from '../assets/aws.png'
import azure from '../assets/azure.png'
import gcp from '../assets/gcp.png'
// import postman from '../assets/postman.png'
import swagger from '../assets/swagger.png'
import graphql from '../assets/graphql.png'

const ConditionalRenderingComponent = () => {
    const [selectedDiv, setSelectedDiv] = useState('pgmTools');

    const showDiv = (divId) => {
        setSelectedDiv(divId);
    };

    return (
        <div className='toolsComponent'>

            <div className='toolstext'>
                <h1 className="tooltitle">
                    <span className="tooltextwrapper">Tools &amp; Technology we use in <span className="span">PyCray</span></span>
                </h1>

                <svg className="toolUnderline" width="73" height="7" viewBox="0 0 73 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="73" height="7" rx="2" fill="#0C67B4" />
                </svg>

                <div className="toolp">
                    <p className="toolps">
                        Our Team of skilled developers thrives on innovation, utilizing the latest advancements to craft software
                        applications that redefine industry standards..
                    </p>
                </div>
            </div>

            <div className="component" >
                {/* <button onClick={() => showDiv('div1')}>Button 1</button>
                <button onClick={() => showDiv('div2')}>Button 2</button>
                <button onClick={() => showDiv('div3')}>Button 3</button> */}

                <div className='componentbuttons'>
                    <button
                        onClick={() => showDiv('pgmTools')}
                        className={`buttonformat ${selectedDiv === 'pgmTools' ? 'selected' : ''}`}
                    >
                        Programming Tools
                    </button>

                    <button
                        onClick={() => showDiv('mAndS')}
                        className={`buttonformat ${selectedDiv === 'mAndS' ? 'selected' : ''}`}
                    >
                        Messaging and Streaming
                    </button>

                    <button
                        onClick={() => showDiv('infraorch')}
                        className={`buttonformat ${selectedDiv === 'infraorch' ? 'selected' : ''}`}
                    >
                        Infra and orchestration
                    </button>

                    <button
                        onClick={() => showDiv('datab')}
                        className={`buttonformat ${selectedDiv === 'datab' ? 'selected' : ''}`}
                    >
                        Databases
                    </button>

                    <button
                        onClick={() => showDiv('logmng')}
                        className={`buttonformat ${selectedDiv === 'logmng' ? 'selected' : ''}`}
                    >
                        Log Management
                    </button>

                    <button
                        onClick={() => showDiv('clouds')}
                        className={`buttonformat ${selectedDiv === 'clouds' ? 'selected' : ''}`}
                    >
                        Cloud Platforms
                    </button>

                    <button
                        onClick={() => showDiv('apicomp')}
                        className={`buttonformat ${selectedDiv === 'apicomp' ? 'selected' : ''}`}
                    >
                        API
                    </button>
                </div>

                <div className='displayedTools'>
                    <div className='toolsnTechRow' style={{ display: selectedDiv === 'pgmTools' ? 'grid' : 'none' }}>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={javascript} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Javascript</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={react} alt="js" />
                            </div>
                            <p className='toolsnTechText'>React</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={native} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Native</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={angular} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Angular</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={flutter} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Flutter</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={css} alt="js" />
                            </div>
                            <p className='toolsnTechText'>CSS</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={html} alt="js" />
                            </div>
                            <p className='toolsnTechText'>HTML</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={python} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Python</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={laravel} alt="js" />
                            </div>
                            <p className='toolsnTechText'>laravel</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={django} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Django</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={figma} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Figma</p>
                        </div>
                    </div>

                    <div className='toolsnTechRow' style={{ display: selectedDiv === 'mAndS' ? 'grid' : 'none' }}>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={kafka} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Kafka</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={rabbitmq} alt="js" />
                            </div>
                            <p className='toolsnTechText'>RabbitMQ</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={sqs} alt="js" />
                            </div>
                            <p className='toolsnTechText'>SQS</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={twilio} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Twilio</p>
                        </div>
                    </div>

                    <div className='toolsnTechRow' style={{ display: selectedDiv === 'infraorch' ? 'grid' : 'none' }}>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={terraform} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Terraform</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={docker} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Docker</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={kubernetes} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Kubernetes</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={airflow} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Airflow</p>
                        </div>
                    </div>

                    <div className='toolsnTechRow' style={{ display: selectedDiv === 'datab' ? 'grid' : 'none' }}>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={mongodb} alt="js" />
                            </div>
                            <p className='toolsnTechText'>MongoDB</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={Mysql} alt="js" />
                            </div>
                            <p className='toolsnTechText'>MySQL</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={postgreSQL} alt="js" />
                            </div>
                            <p className='toolsnTechText'>PostgresSQL</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={oracle} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Oracle</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={redis} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Redis</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={elasticsearch} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Elasticsearch</p>
                        </div>
                    </div>

                    <div className='toolsnTechRow' style={{ display: selectedDiv === 'logmng' ? 'grid' : 'none' }}>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={logstash} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Logstash</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={kibana} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Kibana</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={grafana} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Grafana</p>
                        </div>
                    </div>

                    <div className='toolsnTechRow' style={{ display: selectedDiv === 'clouds' ? 'grid' : 'none' }}>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={aws} alt="js" />
                            </div>
                            <p className='toolsnTechText'>AWS</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={azure} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Azure</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={gcp} alt="js" />
                            </div>
                            <p className='toolsnTechText'>GCP</p>
                        </div>
                    </div>

                    <div className='toolsnTechRow' style={{ display: selectedDiv === 'apicomp' ? 'grid' : 'none' }}>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={grafana} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Grafana</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={swagger} alt="js" />
                            </div>
                            <p className='toolsnTechText'>Swagger</p>
                        </div>
                        <div>
                            <div className="toolsnTechCard">
                                <img className='card-img' src={graphql} alt="js" />
                            </div>
                            <p className='toolsnTechText'>GraphQL</p>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default ConditionalRenderingComponent;
