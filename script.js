
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.plantas-nav li');
    const pdfFrame = document.getElementById('pdf-frame');
    const informesContainer = document.querySelector('.informes-container');

    const informes = {
        'arauco-l2': `
            <div class="informe active" id="arauco-l2">
                <h3>Seguridad y Medio Ambiente</h3>
                <ul>
                    <li>Cero incidentes en materia de seguridad y medio ambiente.</li>
                </ul>

                <h3>Plan de Inversiones 2025</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Presupuesto (MMUSD)</th>
                            <th>Gasto a la Fecha (MMUSD)</th>
                            <th>Proyectado Anual (MMUSD)</th>
                            <th>% Cumplimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Flujo POI</td>
                            <td>3,5</td>
                            <td>1,09</td>
                            <td>1,7</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>Ingeniería</td>
                            <td>0,7</td>
                            <td>0,22</td>
                            <td>0,34</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Equipos</td>
                            <td>2,1</td>
                            <td>0,65</td>
                            <td>1,02</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Construcción</td>
                            <td>0,7</td>
                            <td>0,22</td>
                            <td>0,34</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Estado:</strong> En plazo y presupuesto.</p>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SOLMED</td>
                            <td>Estudio Automatización Control Boca Toma Agua Planta</td>
                            <td>95%</td>
                            <td>Sin observaciones</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Iniciativa Reemplazar Transformador de Poder T1 y T2</td>
                            <td>70%</td>
                            <td>Sin observaciones</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Proyecto Reparación Largo Plazo Celda 2</td>
                            <td>99,5%</td>
                            <td>Sin observaciones</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Iniciativas en Desarrollo</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>C001886</td>
                            <td>Reemplazar Transformador de Poder T1 y T2 por Transformador de 25 MVA</td>
                            <td>70%</td>
                            <td>Preparación de informe para emitir a Planta.</td>
                        </tr>
                        <tr>
                            <td>C001884</td>
                            <td>Estudio Integridad L2</td>
                            <td>30%</td>
                            <td>20/08 se adjudicó contrato de medición de espesores a EESS GMS.</td>
                        </tr>
                        <tr>
                            <td>C001916</td>
                            <td>Modificaciones de Condiciones para dar Cumplimiento al EOC</td>
                            <td>95%</td>
                            <td>Preparación de informe para emitir a Planta.</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Medición Fasorial - Generador TG4/5 y Generador TG8</td>
                            <td>2%</td>
                            <td>El 22/08 se recibió solicitud de desarrollo de IB de parte de la Gerencia de Arauco Bioenergía.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>Estudio Automatización Control Boca Toma Agua Planta: 95%</li>
                    <li>Iniciativa Reemplazar Transformador de Poder T1 y T2: 70%</li>
                    <li>Proyecto Reparación Largo Plazo Celda 2: 99,5%</li>
                    <li>Reemplazar Transformador de Poder T1 y T2 por Transformador de 25 MVA: 70%</li>
                    <li>Estudio Integridad L2: 30%</li>
                    <li>Modificaciones de Condiciones para dar Cumplimiento al EOC: 95%</li>
                    <li>Medición Fasorial - Generador TG4/5 y Generador TG8: 2%</li>
                </ul>

                <h3>Alertas</h3>
                <ul>
                    <li>No se reportan alertas significativas en el período.</li>
                </ul>
            </div>
        `,
        'arauco-l3': `
            <div class="informe" id="arauco-l3">
                <h3>Seguridad y Medio Ambiente</h3>
                <ul>
                    <li>Cero incidentes en materia de seguridad y medio ambiente.</li>
                </ul>

                <h3>Plan de Inversiones 2025</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Presupuesto (MMUSD)</th>
                            <th>Gasto a la Fecha (MMUSD)</th>
                            <th>Proyectado Anual (MMUSD)</th>
                            <th>% Cumplimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Flujo POI</td>
                            <td>11,36</td>
                            <td>12,77</td>
                            <td>21,91</td>
                            <td>193%</td>
                        </tr>
                        <tr>
                            <td>Ingeniería</td>
                            <td>1,70</td>
                            <td>1,92</td>
                            <td>3,29</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Equipos</td>
                            <td>7,95</td>
                            <td>8,94</td>
                            <td>15,34</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Construcción</td>
                            <td>1,70</td>
                            <td>1,92</td>
                            <td>3,29</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Estado:</strong> Riesgo de sobrecosto.</p>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SOLMED</td>
                            <td>Reconstrucción Stacker Astillas Área Maderas</td>
                            <td>89%</td>
                            <td>Sin observaciones</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Incremento de Capacidad Torres de Enfriamiento</td>
                            <td>77%</td>
                            <td>Riesgo de atraso en la ejecución.</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Solución LP 63 Bombas Alta Vibración</td>
                            <td>100%</td>
                            <td>Finalizado</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Iniciativas en Desarrollo</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>C001937</td>
                            <td>Control Acceso Romana Camiones</td>
                            <td>90%</td>
                            <td>El 11/08 se emitió el programa maestro en Rev. OB.</td>
                        </tr>
                        <tr>
                            <td>C001785</td>
                            <td>Centro de Valorización de Residuos</td>
                            <td>79%</td>
                            <td>Continuar desarrollo de IB. Se define materialidad en hormigón prefabricado.</td>
                        </tr>
                        <tr>
                            <td>C001958</td>
                            <td>Nuevo Filtro Licor Verde Caustificación</td>
                            <td>90%</td>
                            <td>Enviar a Planta Informe final, Programa Maestro y Capex.</td>
                        </tr>
                        <tr>
                            <td>C001960</td>
                            <td>Mejora en Sistema de Alimentación Biomasa a 100% Eucalipto (CP5)</td>
                            <td>10%</td>
                            <td>Realizar reunión el 04/09 con equipo área Caldera y Preparación Madera, para estudiar estrategia de implementación.</td>
                        </tr>
                        <tr>
                            <td>C001957</td>
                            <td>Mejoras Viales Arauco L3</td>
                            <td>25%</td>
                            <td>Emitir planos en Rev. OB, a partir del 12/09.</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Medición Fasorial Generador TG8 de Planta Arauco L3</td>
                            <td>2%</td>
                            <td>Iniciar desarrollo de la IB con recursos propios de GIC.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>Implementación Protecciones de Fuga a Tierra Cerca de Cargas Eléctricas: 100%</li>
                    <li>Implementación Sistema Detección y Extinción Incendios en Correas de Preparación Maderas: 15%</li>
                    <li>Centro de Valorización de Residuos: 79%</li>
                    <li>Nuevo Filtro Licor Verde Caustificación: 90%</li>
                    <li>Mejora en Sistema de Alimentación Biomasa a 100% Eucalipto: 25%</li>
                    <li>Reconstrucción Stacker Astillas Área Maderas: 89%</li>
                    <li>Incremento de Capacidad Torres de Enfriamiento: 77%</li>
                    <li>Solución LP 63 Bombas Alta Vibración: 100%</li>
                </ul>

                <h3>Alertas</h3>
                <ul>
                    <li>Riesgo en el proyecto "Incremento de Capacidad Torres de Enfriamiento" por posible atraso en la ejecución.</li>
                </ul>
            </div>
        `,
        'constitucion': `
            <div class="informe" id="constitucion">
                <h3>Seguridad y Medio Ambiente</h3>
                <ul>
                    <li>Cero incidentes en materia de seguridad y medio ambiente.</li>
                </ul>

                <h3>Plan de Inversiones 2025</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Presupuesto (MMUSD)</th>
                            <th>Gasto a la Fecha (MMUSD)</th>
                            <th>Proyectado Anual (MMUSD)</th>
                            <th>% Cumplimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Presupuesto POI</td>
                            <td>3,8</td>
                            <td>1,094</td>
                            <td>1,8</td>
                            <td>49,9%</td>
                        </tr>
                        <tr>
                            <td>Ingeniería</td>
                            <td>0,95</td>
                            <td>0,27</td>
                            <td>0,45</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Equipos</td>
                            <td>1,9</td>
                            <td>0,55</td>
                            <td>0,9</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Construcción</td>
                            <td>0,95</td>
                            <td>0,27</td>
                            <td>0,45</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Estado:</strong> En plazo y presupuesto.</p>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SOLMED</td>
                            <td>Estudio Upgrade Centrales Hidráulicas Prensas Húmedas</td>
                            <td>95%</td>
                            <td>Sin observaciones</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Normalización de Tableros de Media y Baja Tensión</td>
                            <td>28%</td>
                            <td>En ejecución</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Reemplazo Harneros Inferiores Digestores</td>
                            <td>100%</td>
                            <td>Finalizado</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Iniciativas en Desarrollo</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>C001803</td>
                            <td>Mitigación Ruidos DS38</td>
                            <td>15%</td>
                            <td>Generar listado de planos y documentos de IB e iniciar desarrollo de IB por Proterm.</td>
                        </tr>
                        <tr>
                            <td>C002000</td>
                            <td>Reemplazo Bomba Recirculación Digestores 1@8</td>
                            <td>5%</td>
                            <td>Realizar visita a Planta.</td>
                        </tr>
                        <tr>
                            <td>C002001</td>
                            <td>Habilitar 4ta. Bomba Pozo Bocatoma</td>
                            <td>10%</td>
                            <td>Emitir EETT para cotización de equipos mecánicos y eléctricos.</td>
                        </tr>
                        <tr>
                            <td>C001451</td>
                            <td>Nueva Puerta Acceso Hogar Caldera de Poder</td>
                            <td>15%</td>
                            <td>Realizar reunión con Planta y Valmet para revisar antecedentes y oferta original.</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Normalizar Equipos y Sala Eléctrica Planta de Agua</td>
                            <td>15%</td>
                            <td>A partir 08/09/25 se realizará emisión de planos y documentos.</td>
                        </tr>
                        <tr>
                            <td>C001991</td>
                            <td>Implementación SPCI TG1 y Silo Biomasa</td>
                            <td>5%</td>
                            <td>Iniciar emisión de planos y documentos de la IB.</td>
                        </tr>
                        <tr>
                            <td>C001990</td>
                            <td>Sistema Protección de Escalerillas</td>
                            <td>10%</td>
                            <td>02/09/25 realizar visita a Planta para realizar levantamiento de información.</td>
                        </tr>
                        <tr>
                            <td>C001993</td>
                            <td>Reemplazo CCM 84 VE - PCC</td>
                            <td>5%</td>
                            <td>06/08/25 generar ficha con alcance y estrategia de implementación.</td>
                        </tr>
                        <tr>
                            <td>C001992</td>
                            <td>Implementación Ecofiltros L1</td>
                            <td>2%</td>
                            <td>03/09/25 realizar IKOM para revisar alcances del proyecto.</td>
                        </tr>
                        <tr>
                            <td>C001984</td>
                            <td>Reemplazo End. Condensador 63-E-53</td>
                            <td>5%</td>
                            <td>04/09/25 realizar visita a Planta para levantamiento de información.</td>
                        </tr>
                        <tr>
                            <td>C001994</td>
                            <td>Bocatoma Mellico (Solución definitiva)</td>
                            <td>3%</td>
                            <td>Realizar IKOM.</td>
                        </tr>
                        <tr>
                            <td>C001975</td>
                            <td>Renovación Colectores RILES</td>
                            <td>2%</td>
                            <td>04/09/25 realizar visita a Planta para levantamiento de información.</td>
                        </tr>
                        <tr>
                            <td>C000600</td>
                            <td>Reemplazo Colector Vapor Alta Presión Calderas</td>
                            <td>10%</td>
                            <td>Realizar actualización de CAPEX.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>Estudio Upgrade Centrales Hidráulicas Prensas Húmedas: 95%</li>
                    <li>Reacondicionamiento Nave de Máquina: 18%</li>
                    <li>Reemplazo Harneros Inferiores Digestores: 100%</li>
                    <li>Normalización de Tableros de Media y Baja Tensión: 28%</li>
                </ul>

                <h3>Alertas</h3>
                <ul>
                    <li>No se reportan alertas.</li>
                </ul>
            </div>
        `,
        'nueva-aldea': `
            <div class="informe" id="nueva-aldea">
                <h3>Seguridad y Medio Ambiente</h3>
                <ul>
                    <li>Cero incidentes en materia de seguridad y medio ambiente.</li>
                </ul>

                <h3>Plan de Inversiones 2025</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Presupuesto (MMUSD)</th>
                            <th>Gasto a la Fecha (MMUSD)</th>
                            <th>Proyectado Anual (MMUSD)</th>
                            <th>% Cumplimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Flujo POI</td>
                            <td>41,39</td>
                            <td>19,90</td>
                            <td>31,11</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td>Ingeniería</td>
                            <td>4,14</td>
                            <td>1,99</td>
                            <td>3,11</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Equipos</td>
                            <td>33,11</td>
                            <td>15,92</td>
                            <td>24,89</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Construcción</td>
                            <td>4,14</td>
                            <td>1,99</td>
                            <td>3,11</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Estado:</strong> En plazo y presupuesto.</p>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SOLMED</td>
                            <td>Implementación Sistema SCADA</td>
                            <td>80,6%</td>
                            <td>Alineado con lo planificado.</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Reemplazo Uniones Enflanchadas Emisario Etapa IV</td>
                            <td>Adjudicado</td>
                            <td>Próximo a iniciar ejecución.</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Modificación Emisario Atravieso Bajo Estero Batuco</td>
                            <td>Adjudicado</td>
                            <td>Próximo a iniciar ejecución.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Iniciativas en Desarrollo</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>F000225</td>
                            <td>Tren Integrado (F1-Frente D. Nueva Aldea - Desvíos)</td>
                            <td>10%</td>
                            <td>Emitir planos preliminares de L&A: 09/10 Rev 0B/23/10 Rev OC</td>
                        </tr>
                        <tr>
                            <td>C001527</td>
                            <td>Mejoras D.S. 594 2023 y Equidad de Genero</td>
                            <td>75%</td>
                            <td>Adjudicar contrato por la construcción del baño Sector Romana de Camiones.</td>
                        </tr>
                        <tr>
                            <td>C001794</td>
                            <td>Mejoras Lavado Superconcentrador</td>
                            <td>78%</td>
                            <td>Finalizar emisión de planos y documentos en Rev. OC.</td>
                        </tr>
                        <tr>
                            <td>C001824</td>
                            <td>Redistribución de Cargas Barra 1 y Barra 2</td>
                            <td>74%</td>
                            <td>Emitir informe de IB a Planta el 08/09.</td>
                        </tr>
                        <tr>
                            <td>C001827</td>
                            <td>Instalar Sistema de LAAP Prensas DO, D1 y Preblanqueo L1</td>
                            <td>78%</td>
                            <td>11/09 finalizar y emitir Informe IB (incluye Capex y PM).</td>
                        </tr>
                        <tr>
                            <td>C001942</td>
                            <td>Aislación Acústica Sopladores Area Efluentes</td>
                            <td>5%</td>
                            <td>05/09 emitir BBLL para contratación de EESS para el desarrollo de la IB.</td>
                        </tr>
                        <tr>
                            <td>C001943</td>
                            <td>Mejoras por Cruces y Paralelismos Emisario con Proyectos Viales + Saneamiento de Aguas Lluvias</td>
                            <td>10%</td>
                            <td>Revisar permisos y antecedentes para presentar a DGA (02/09).</td>
                        </tr>
                        <tr>
                            <td>C001954</td>
                            <td>Reemplazo Economizador Caldera Recuperadora</td>
                            <td>80%</td>
                            <td>Emitir informe final a Planta el 12/09.</td>
                        </tr>
                        <tr>
                            <td>C001964</td>
                            <td>Mejorar Confiabilidad del Sistema de Comunicación por Fibra Óptica del Emisario</td>
                            <td>2%</td>
                            <td>Adjudicar servicios de asesor de Telecomunicaciones.</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Reemplazo de Líneas RCI Underground</td>
                            <td>15%</td>
                            <td>15/09 adjudicar contrato para ejecución de calicatas.</td>
                        </tr>
                        <tr>
                            <td>S/N</td>
                            <td>Medición Fasorial - Generador TG1 y TG3</td>
                            <td>2%</td>
                            <td>Iniciar desarrollo de la IB con recursos propios de GIC.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>Ampliación de Bodega E de Motores Eléctricos: (Estudio)</li>
                    <li>Producción Pino Pino: Postergado</li>
                    <li>Reemplazo Economizador Caldera Recuperadora: Oferta recibida.</li>
                    <li>Upgrade Prensa D2 Fibra L1: Postergado a PGP 2026.</li>
                    <li>Reemplazo Uniones Enflanchadas Emisario Etapa IV: Adjudicado.</li>
                    <li>Modificación Emisario Atravieso Bajo Estero Batuco: Adjudicado.</li>
                    <li>Implementación Sistema SCADA: 80,6%</li>
                </ul>

                <h3>Alertas</h3>
                <ul>
                    <li>No se reportan alertas.</li>
                </ul>
            </div>
        `,
        'valdivia': `
            <div class="informe" id="valdivia">
                <h3>Seguridad y Medio Ambiente</h3>
                <ul>
                    <li>Cero incidentes en materia de seguridad y medio ambiente.</li>
                </ul>

                <h3>Plan de Inversiones 2025</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Presupuesto (MMUSD)</th>
                            <th>Gasto a la Fecha (MMUSD)</th>
                            <th>Proyectado Anual (MMUSD)</th>
                            <th>% Cumplimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Flujo POI</td>
                            <td>13,47</td>
                            <td>9,06</td>
                            <td>14,44</td>
                            <td>107,3%</td>
                        </tr>
                        <tr>
                            <td>Ingeniería</td>
                            <td>2,42</td>
                            <td>1,63</td>
                            <td>2,60</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Equipos</td>
                            <td>8,76</td>
                            <td>5,89</td>
                            <td>9,39</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Construcción</td>
                            <td>2,29</td>
                            <td>1,54</td>
                            <td>2,45</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Estado:</strong> Riesgo de sobrecosto.</p>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SOLMED</td>
                            <td>Nuevo Concentrador 1D</td>
                            <td>78%</td>
                            <td>Riesgo de sobrecosto.</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Ampliación Sistema SCADA</td>
                            <td>95%</td>
                            <td>En fase final de pruebas.</td>
                        </tr>
                        <tr>
                            <td>SOLMED</td>
                            <td>Instalación de Equipo de Medición Fasorial</td>
                            <td>15%</td>
                            <td>Ingeniería en desarrollo.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Iniciativas en Desarrollo</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>SOLMED</th>
                            <th>Proyecto</th>
                            <th>Avance</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>C001998</td>
                            <td>Reemplazo de Sobrecalentador Secundario de Caldera de Poder</td>
                            <td>5%</td>
                            <td>La iniciativa cuenta con los fondos autorizados y solicitud de pedido liberada para la contratación de David Whelan.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>Nuevo Concentrador 1D: 78% (Riesgo de sobrecosto)</li>
                    <li>Prueba Piloto IP3 + TCF (MAT + Tk Descarga): 72%</li>
                    <li>Ampliación Sistema SCADA: 95%</li>
                    <li>Instalación de Equipo de Medición Fasorial: 15%</li>
                    <li>Reemplazo de Sobrecalentador Secundario de la Caldera de Poder: (Iniciativa) 5%</li>
                </ul>

                <h3>Alertas</h3>
                <ul>
                    <li>El proyecto "Nuevo Concentrador 1D" presenta un EAC (Estimado a Término de Costos) un 3,9% por sobre el presupuesto.</li>
                </ul>
            </div>
        `
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const informeId = link.dataset.informe;
            const pdfPath = link.dataset.pdf;

            // Update content
            informesContainer.innerHTML = informes[informeId];

            // Update PDF
            pdfFrame.src = pdfPath;
        });
    });

    // Set initial state
    if (navLinks.length > 0) {
        navLinks[0].click();
    }
});
