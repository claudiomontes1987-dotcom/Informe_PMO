
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
                <ul>
                    <li><strong>Flujo POI:</strong> MMUSD 3,5.</li>
                    <li><strong>Gasto real a agosto:</strong> MMUSD 1,09 (31% del POI).</li>
                    <li><strong>Proyección de gasto anual:</strong> MMUSD 1,7 (50% de cumplimiento proyectado).</li>
                </ul>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estudio Automatización Control Boca Toma Agua Planta</td>
                            <td>95%</td>
                        </tr>
                        <tr>
                            <td>Iniciativa Reemplazar Transformador de Poder T1 y T2</td>
                            <td>70%</td>
                        </tr>
                        <tr>
                            <td>Proyecto Reparación Largo Plazo Celda 2</td>
                            <td>99,5%</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>El proyecto "Reparación Largo Plazo Celda 2" ha alcanzado un 99,5% de avance real.</li>
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
                <ul>
                    <li><strong>Flujo POI:</strong> MMUSD 11,36.</li>
                    <li><strong>Gasto real a agosto:</strong> MMUSD 12,77 (112% del POI).</li>
                    <li><strong>Proyección de gasto anual:</strong> MMUSD 21,91 (193% de cumplimiento proyectado).</li>
                </ul>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Reconstrucción Stacker Astillas Área Maderas</td>
                            <td>89%</td>
                        </tr>
                        <tr>
                            <td>Incremento de Capacidad Torres de Enfriamiento</td>
                            <td>77%</td>
                        </tr>
                        <tr>
                            <td>Solución LP 63 Bombas Alta Vibración</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>El proyecto "Reconstrucción Stacker Astillas Área Maderas" presenta un 89% de avance.</li>
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
                <ul>
                    <li><strong>Presupuesto POI:</strong> MMUSD 3,8.</li>
                    <li><strong>Flujo real a agosto:</strong> MMUSD 1,094 (29% del POI).</li>
                    <li><strong>Proyección de gasto anual:</strong> MMUSD 1,8 (49,9% de cumplimiento proyectado).</li>
                </ul>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estudio Upgrade Centrales Hidráulicas Prensas Húmedas</td>
                            <td>95%</td>
                        </tr>
                        <tr>
                            <td>Normalización de Tableros de Media y Baja Tensión</td>
                            <td>28%</td>
                        </tr>
                        <tr>
                            <td>Reemplazo Harneros Inferiores Digestores</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>La iniciativa "Reemplazo Harneros Inferiores Digestores" ha finalizado con un 100% de avance.</li>
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
                <ul>
                    <li><strong>Flujo POI:</strong> USD 41,39 MM.</li>
                    <li><strong>Gasto real a agosto:</strong> USD 19,90 MM (48% del POI).</li>
                    <li><strong>Proyección de gasto anual:</strong> USD 31,11 MM (75% de cumplimiento proyectado).</li>
                </ul>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Implementación Sistema SCADA</td>
                            <td>80,6%</td>
                        </tr>
                        <tr>
                            <td>Reemplazo Uniones Enflanchadas Emisario Etapa IV</td>
                            <td>Adjudicado</td>
                        </tr>
                        <tr>
                            <td>Modificación Emisario Atravieso Bajo Estero Batuco</td>
                            <td>Adjudicado</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>El proyecto "Implementación Sistema SCADA" mantiene un avance del 80,6%, alineado con lo planificado.</li>
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
                <ul>
                    <li><strong>Flujo POI:</strong> USD 13,47 MM.</li>
                    <li><strong>Flujo real a agosto:</strong> USD 9,06 MM (67,3% del POI).</li>
                    <li><strong>Proyección de gasto anual:</strong> USD 14,44 MM (107,3% de cumplimiento proyectado).</li>
                </ul>

                <h3>Estudios y Proyectos</h3>
                <table class="proyectos-table">
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nuevo Concentrador 1D</td>
                            <td>78%</td>
                        </tr>
                        <tr>
                            <td>Ampliación Sistema SCADA</td>
                            <td>95%</td>
                        </tr>
                        <tr>
                            <td>Instalación de Equipo de Medición Fasorial</td>
                            <td>15%</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Avances Destacados</h3>
                <ul>
                    <li>El proyecto "Nuevo Concentrador 1D" presenta un avance del 78% real, aunque se identifican riesgos de sobrecosto.</li>
                </ul>

                <h3>Alertas</h3>
                <ul>
                    <li>El proyecto "Nuevo Concentrador 1D" presenta un EAC (Estimado a Término de Costos) un 3,9% por sobre el presupuesto.</li>
                </ul>
            </div>
        `
    };

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
