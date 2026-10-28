import React, { useState } from 'react';



export default function App() {

&#x20; const \[activeTab, setActiveTab] = useState('crm');

&#x20; const \[isLoggedIn, setIsLoggedIn] = useState(true);

&#x20; const \[selectedLead, setSelectedLead] = useState(null);

&#x20; const \[activeVideo, setActiveVideo] = useState(null);

&#x20; const \[searchTerm, setSearchTerm] = useState('');

&#x20; const \[timeFilter, setTimeFilter] = useState('mes');

&#x20; const \[showDiscarded, setShowDiscarded] = useState(false);

&#x20; const \[showImportModal, setShowImportModal] = useState(false);

&#x20; const \[showFocusMode, setShowFocusMode] = useState(false);

&#x20; const \[showAgendaPopup, setShowAgendaPopup] = useState(false);

&#x20; const \[emailTab, setEmailTab] = useState('entrada');

&#x20; const \[showComposeEmail, setShowComposeEmail] = useState(false);



&#x20; // Estados dos Leads

&#x20; const \[leads, setLeads] = useState(\[

&#x20;   { id: 1, name: 'English College', contact: 'Suellen / Kattia', phone: '+55 (47) 3319-2102', stage: 'novo', value: 'R$ 12.000', score: 85, discarded: false, lastActivity: '2026-10-28' },

&#x20;   { id: 2, name: 'Magic Balloon Idiomas', contact: 'Marcos Vinicius', phone: '+55 (11) 98822-1144', stage: 'qualificacao', value: 'R$ 18.000', score: 92, discarded: false, lastActivity: '2026-10-27' },

&#x20;   { id: 3, name: 'Lesser School of English', contact: 'Ana Paula', phone: '+55 (21) 3256-4002', stage: 'reuniao', value: 'R$ 25.000', score: 95, discarded: false, lastActivity: '2026-10-28' },

&#x20;   { id: 4, name: 'Centro Educacional Novo Saber', contact: 'Maiara Venturi', phone: '+55 (47) 3319-2102', stage: 'proposta', value: 'R$ 30.000', score: 90, discarded: false, lastActivity: '2026-10-27' },

&#x20;   { id: 5, name: 'The House English', contact: 'Carlos Eduardo', phone: '+55 (16) 99204-9585', stage: 'fechamento', value: 'R$ 45.000', score: 98, discarded: false, lastActivity: '2026-10-22' }

&#x20; ]);



&#x20; // E-mails do Outlook Rockfeller

&#x20; const emails = \[

&#x20;   { id: 1, type: 'entrada', sender: 'marcos.santos@rockfeller.com.br', subject: 'Aceito: Parceria Rockfeller Franchising \& Sponte', preview: 'Olá equipe, confirmamos o interesse na integração...', time: '13:53', date: '28/10/2026' },

&#x20;   { id: 2, type: 'enviados', sender: 'fernando.leite@rockfeller.com.br', subject: 'Apresentação de DRE - Jonh Cler - Goiania', preview: 'Segue em anexo a apresentação detalhada de DRE...', time: '14:38', date: '28/10/2026' },

&#x20;   { id: 3, type: 'entrada', sender: 'gerentemarques@idiomasrio.com.br', subject: 'Reunião do Microsoft Teams Ingress...', preview: 'Reunião agendada via Microsoft Teams para apresentação...', time: '11:25', date: '27/10/2026' }

&#x20; ];



&#x20; // Chamadas / Webphone

&#x20; const calls = \[

&#x20;   { school: 'Centro Educacional Novo Saber', operator: 'Maiara Venturi', phone: '+55 (47) 3319-2102', status: 'Aguardando Resposta', date: '27/10/2026 às 16:08', duration: '00:03:20', cost: 'R$ 0,00' },

&#x20;   { school: 'The House English', operator: 'Marcos Eduardo', phone: '+55 (16) 99204-9585', status: 'Aguardando Resposta', date: '22/10/2026 às 10:37', duration: '00:03:03', cost: 'R$ 0,00' },

&#x20;   { school: 'Blue - Escola de Inglês', operator: 'Marcos Eduardo', phone: '+55 (49) 98816-3003', status: 'Novo Lead', date: '22/10/2026 às 10:14', duration: '00:03:02', cost: 'R$ 0,00' }

&#x20; ];



&#x20; if (!isLoggedIn) {

&#x20;   return (

&#x20;     <div style={{ minHeight: '100vh', background: '#0B192C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>

&#x20;       <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', width: '400px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>

&#x20;         <h2 style={{ color: '#0B192C', marginBottom: '8px' }}>BDR Core Rockfeller</h2>

&#x20;         <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>Plataforma Corporativa de Pré-Vendas</p>

&#x20;         <button 

&#x20;           onClick={() => setIsLoggedIn(true)}

&#x20;           style={{ width: '100%', padding: '12px', background: '#0078D4', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}

&#x20;         >

&#x20;           Entrar com Microsoft Outlook (@rockfeller.com.br)

&#x20;         </button>

&#x20;       </div>

&#x20;     </div>

&#x20;   );

&#x20; }



&#x20; return (

&#x20;   <div style={{ minHeight: '100vh', background: '#f4f6f9', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>

&#x20;     {/\* Topo / Header \*/}

&#x20;     <header style={{ background: '#0B192C', color: '#fff', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #FFC107' }}>

&#x20;       <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

&#x20;         <h1 style={{ fontSize: '18px', margin: 0, color: '#FFC107', fontWeight: 'bold' }}>BDR CORE <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'normal' }}>| Rockfeller Franchising</span></h1>

&#x20;         <div style={{ display: 'flex', gap: '8px' }}>

&#x20;           <button onClick={() => setActiveTab('crm')} style={{ background: activeTab === 'crm' ? '#FFC107' : 'transparent', color: activeTab === 'crm' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>CRM Pipeline</button>

&#x20;           <button onClick={() => setActiveTab('cadencias')} style={{ background: activeTab === 'cadencias' ? '#FFC107' : 'transparent', color: activeTab === 'cadencias' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Cadências</button>

&#x20;           <button onClick={() => setActiveTab('emails')} style={{ background: activeTab === 'emails' ? '#FFC107' : 'transparent', color: activeTab === 'emails' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Central de E-mails</button>

&#x20;           <button onClick={() => setActiveTab('extrato')} style={{ background: activeTab === 'extrato' ? '#FFC107' : 'transparent', color: activeTab === 'extrato' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Extrato \& Webphone</button>

&#x20;           <button onClick={() => setActiveTab('guia')} style={{ background: activeTab === 'guia' ? '#FFC107' : 'transparent', color: activeTab === 'guia' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Guia \& Manual</button>

&#x20;         </div>

&#x20;       </div>

&#x20;       <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>

&#x20;         <button 

&#x20;           onClick={() => setShowFocusMode(true)}

&#x20;           style={{ background: '#28a745', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}

&#x20;         >

&#x20;           ⚡ Iniciar Modo Foco

&#x20;         </button>

&#x20;         <div onClick={() => setShowAgendaPopup(!showAgendaPopup)} style={{ cursor: 'pointer', background: '#1e293b', padding: '6px 12px', borderRadius: '6px', border: '1px solid #334155', fontSize: '13px' }}>

&#x20;           📅 Agenda de Hoje (3)

&#x20;         </div>

&#x20;       </div>

&#x20;     </header>



&#x20;     {/\* PopUp Agenda de Hoje \*/}

&#x20;     {showAgendaPopup \&\& (

&#x20;       <div style={{ position: 'fixed', top: '65px', right: '20px', background: '#fff', width: '320px', padding: '16px', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.2)', zIndex: 1000, borderLeft: '4px solid #FFC107' }}>

&#x20;         <h3 style={{ margin: '0 0 10px 0', fontSize: '15px', color: '#0B192C' }}>Compromissos de Hoje</h3>

&#x20;         <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '13px', color: '#333', display: 'flex', flexDirection: 'column', gap: '8px' }}>

&#x20;           <li><strong>09:30</strong> - Ligação para English College (Suellen)</li>

&#x20;           <li><strong>11:00</strong> - Reunião Teams com Magic Balloon</li>

&#x20;           <li><strong>15:00</strong> - Envio de Proposta Pedagógica (Lesser School)</li>

&#x20;         </ul>

&#x20;         <button onClick={() => setShowAgendaPopup(false)} style={{ marginTop: '12px', width: '100%', padding: '6px', background: '#0B192C', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Fechar</button>

&#x20;       </div>

&#x20;     )}



&#x20;     {/\* Conteúdo Principal \*/}

&#x20;     <main style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>

&#x20;       

&#x20;       {/\* ABA CRM \*/}

&#x20;       {activeTab === 'crm' \&\& (

&#x20;         <div>

&#x20;           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>

&#x20;             <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

&#x20;               <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#0B192C' }}>Filtro Temporal:</span>

&#x20;               {\['hoje', 'ontem', 'semana', 'mes', 'todos'].map(f => (

&#x20;                 <button 

&#x20;                   key={f} 

&#x20;                   onClick={() => setTimeFilter(f)}

&#x20;                   style={{ padding: '6px 12px', background: timeFilter === f ? '#0B192C' : '#e2e8f0', color: timeFilter === f ? '#FFC107' : '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', textTransform: 'capitalize', fontSize: '12px', fontWeight: 'bold' }}

&#x20;                 >

&#x20;                   {f}

&#x20;                 </button>

&#x20;               ))}

&#x20;             </div>

&#x20;             <div style={{ display: 'flex', gap: '10px' }}>

&#x20;               <button onClick={() => setShowImportModal(true)} style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>📥 Importação em Massa (CSV)</button>

&#x20;               <button onClick={() => setShowDiscarded(!showDiscarded)} style={{ background: showDiscarded ? '#64748b' : '#cbd5e1', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>{showDiscarded ? 'Ocultar Descartados' : 'Ver Descartados'}</button>

&#x20;             </div>

&#x20;           </div>



&#x20;           {/\* Kanban Pipeline \*/}

&#x20;           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>

&#x20;             {\[

&#x20;               { key: 'novo', title: 'Novo Lead', color: '#3b82f6' },

&#x20;               { key: 'qualificacao', title: 'Qualificação BANT', color: '#eab308' },

&#x20;               { key: 'reuniao', title: 'Reunião / Apresentação', color: '#a855f7' },

&#x20;               { key: 'proposta', title: 'Proposta Enviada', color: '#f97316' },

&#x20;               { key: 'fechamento', title: 'Fechamento / Contrato', color: '#22c55e' }

&#x20;             ].map(col => (

&#x20;               <div key={col.key} style={{ background: '#fff', borderRadius: '8px', borderTop: `4px solid ${col.color}`, padding: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>

&#x20;                 <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#0B192C', display: 'flex', justifyContent: 'space-between' }}>

&#x20;                   {col.title}

&#x20;                   <span style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: '10px', fontSize: '11px' }}>{leads.filter(l => l.stage === col.key).length}</span>

&#x20;                 </h4>

&#x20;                 <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

&#x20;                   {leads.filter(l => l.stage === col.key).map(lead => (

&#x20;                     <div 

&#x20;                       key={lead.id} 

&#x20;                       onClick={() => setSelectedLead(lead)}

&#x20;                       style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}

&#x20;                     >

&#x20;                       <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#0f172a', marginBottom: '4px' }}>{lead.name}</div>

&#x20;                       <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px' }}>Contato: {lead.contact}</div>

&#x20;                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>

&#x20;                         <span style={{ color: '#0284c7', fontWeight: 'bold' }}>{lead.value}</span>

&#x20;                         <span style={{ background: '#dcfce7', color: '#15803d', padding: '2px 6px', borderRadius: '4px' }}>Score: {lead.score}</span>

&#x20;                       </div>

&#x20;                     </div>

&#x20;                   ))}

&#x20;                 </div>

&#x20;               </div>

&#x20;             ))}

&#x20;           </div>

&#x20;         </div>

&#x20;       )}



&#x20;       {/\* ABA CADÊNCIAS \*/}

&#x20;       {activeTab === 'cadencias' \&\& (

&#x20;         <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>

&#x20;           <h3 style={{ color: '#0B192C', marginTop: 0 }}>Central de Cadências Automatizadas</h3>

&#x20;           <p style={{ color: '#666', fontSize: '13px' }}>Fluxos multicanal ativos para prospecção de franquias e escolas de idiomas.</p>

&#x20;           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>

&#x20;             <div style={{ border: '1px solid #e2e8f0', padding: '15px', borderRadius: '8px' }}>

&#x20;               <h4 style={{ margin: '0 0 10px 0', color: '#0B192C' }}>Cadência Padrão B2B - Escolas</h4>

&#x20;               <p style={{ fontSize: '12px', color: '#666' }}>Passo 1: E-mail de Apresentação (Outlook) + Passo 2: Ligação Webphone + Passo 3: WhatsApp Direto.</p>

&#x20;               <span style={{ background: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>Status: Ativo (45 Leads em progresso)</span>

&#x20;             </div>

&#x20;             <div style={{ border: '1px solid #e2e8f0', padding: '15px', borderRadius: '8px' }}>

&#x20;               <h4 style={{ margin: '0 0 10px 0', color: '#0B192C' }}>Cadência Reativa - Inbound</h4>

&#x20;               <p style={{ fontSize: '12px', color: '#666' }}>Passo 1: Contato Imediato via Webphone em até 5 min + Passo 2: Envio de Proposta Comercial.</p>

&#x20;               <span style={{ background: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>Status: Ativo (12 Leads em progresso)</span>

&#x20;             </div>

&#x20;           </div>

&#x20;         </div>

&#x20;       )}



&#x20;       {/\* ABA CENTRAL DE E-MAILS (OUTLOOK) \*/}

&#x20;       {activeTab === 'emails' \&\& (

&#x20;         <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>

&#x20;           <div style={{ background: '#0B192C', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

&#x20;             <div>

&#x20;               <h3 style={{ margin: 0, fontSize: '16px', color: '#FFC107' }}>Central de E-mails - Outlook Corporativo</h3>

&#x20;               <span style={{ fontSize: '12px', color: '#94a3b8' }}>Sincronizado com: marcos.santos@rockfeller.com.br</span>

&#x20;             </div>

&#x20;             <button onClick={() => setShowComposeEmail(true)} style={{ background: '#FFC107', color: '#0B192C', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>✍️ Escrever E-mail</button>

&#x20;           </div>

&#x20;           <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', padding: '0 20px' }}>

&#x20;             {\['entrada', 'enviados', 'lixeira'].map(tab => (

&#x20;               <button 

&#x20;                 key={tab} 

&#x20;                 onClick={() => setEmailTab(tab)}

&#x20;                 style={{ padding: '12px 20px', background: 'transparent', border: 'none', borderBottom: emailTab === tab ? '3px solid #0B192C' : '3px solid transparent', fontWeight: emailTab === tab ? 'bold' : 'normal', color: emailTab === tab ? '#0B192C' : '#64748b', cursor: 'pointer', textTransform: 'capitalize' }}

&#x20;               >

&#x20;                 {tab}

&#x20;               </button>

&#x20;             ))}

&#x20;           </div>

&#x20;           <div style={{ padding: '10px 20px' }}>

&#x20;             {emails.filter(e => e.type === emailTab).map(mail => (

&#x20;               <div key={mail.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>

&#x20;                 <div>

&#x20;                   <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#0f172a' }}>{mail.subject}</div>

&#x20;                   <div style={{ fontSize: '12px', color: '#64748b' }}>{mail.preview} ({mail.sender})</div>

&#x20;                 </div>

&#x20;                 <div style={{ fontSize: '12px', color: '#94a3b8' }}>{mail.date} às {mail.time}</div>

&#x20;               </div>

&#x20;             ))}

&#x20;           </div>

&#x20;         </div>

&#x20;       )}



&#x20;       {/\* ABA EXTRATO \& WEBPHONE \*/}

&#x20;       {activeTab === 'extrato' \&\& (

&#x20;         <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>

&#x20;           <h3 style={{ color: '#0B192C', marginTop: 0 }}>Extrato e Histórico de Ligações (Webphone)</h3>

&#x20;           <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '6px', marginBottom: '20px', border: '1px solid #e2e8f0', fontSize: '13px' }}>

&#x20;             <strong>Registros Totais:</strong> Plano Webphone: R$ 338,00 | Consumo Mês: R$ 0,00 | Tempo de Ligações: <strong>00:49:30</strong> | Chamadas: <strong>287</strong>

&#x20;           </div>

&#x20;           <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>

&#x20;             <thead>

&#x20;               <tr style={{ background: '#f1f5f9', color: '#0B192C', textAlign: 'left' }}>

&#x20;                 <th style={{ padding: '10px' }}>Escola / Lead</th>

&#x20;                 <th style={{ padding: '10px' }}>Operador</th>

&#x20;                 <th style={{ padding: '10px' }}>Telefone</th>

&#x20;                 <th style={{ padding: '10px' }}>Status</th>

&#x20;                 <th style={{ padding: '10px' }}>Data / Hora</th>

&#x20;                 <th style={{ padding: '10px' }}>Duração</th>

&#x20;                 <th style={{ padding: '10px' }}>Gravação</th>

&#x20;               </tr>

&#x20;             </thead>

&#x20;             <tbody>

&#x20;               {calls.map((c, idx) => (

&#x20;                 <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>

&#x20;                   <td style={{ padding: '10px', fontWeight: 'bold', color: '#0f172a' }}>{c.school}</td>

&#x20;                   <td style={{ padding: '10px', color: '#64748b' }}>{c.operator}</td>

&#x20;                   <td style={{ padding: '10px', color: '#64748b' }}>{c.phone}</td>

&#x20;                   <td style={{ padding: '10px' }}><span style={{ background: '#dbeafe', color: '#1e40af', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>{c.status}</span></td>

&#x20;                   <td style={{ padding: '10px', color: '#64748b' }}>{c.date}</td>

&#x20;                   <td style={{ padding: '10px', fontWeight: 'bold' }}>{c.duration}</td>

&#x20;                   <td style={{ padding: '10px' }}>

&#x20;                     <button style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>📥 Baixar Áudio</button>

&#x20;                   </td>

&#x20;                 </tr>

&#x20;               ))}

&#x20;             </tbody>

&#x20;           </table>

&#x20;         </div>

&#x20;       )}



&#x20;       {/\* ABA GUIA \& MANUAL \*/}

&#x20;       {activeTab === 'guia' \&\& (

&#x20;         <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>

&#x20;           <h3 style={{ color: '#0B192C', marginTop: 0 }}>Guia \& Manual do BDR Core</h3>

&#x20;           <p style={{ color: '#666', fontSize: '13px' }}>Assista às pílulas de treinamento interativo para dominar a ferramenta de pré-vendas.</p>

&#x20;           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '20px' }}>

&#x20;             {\[

&#x20;               { title: 'Modo Foco em Ligações', duration: '00:45', desc: 'Como utilizar o discador contínuo e roteiro SPIN.' },

&#x20;               { title: 'Importação e Mapeamento de Leads', duration: '01:00', desc: 'Como subir planilhas CSV/Excel e mapear colunas.' },

&#x20;               { title: 'Qualificação BANT e Mudança de Etapa', duration: '00:50', desc: 'Como pontuar e mover cards no Kanban.' }

&#x20;             ].map((v, i) => (

&#x20;               <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', background: '#f8fafc' }}>

&#x20;                 <div style={{ background: '#0B192C', color: '#FFC107', padding: '20px', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold', marginBottom: '12px' }}>

&#x20;                   ▶️ Assistir Vídeo ({v.duration})

&#x20;                 </div>

&#x20;                 <h4 style={{ margin: '0 0 6px 0', fontSize: '14px', color: '#0B192C' }}>{v.title}</h4>

&#x20;                 <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>{v.desc}</p>

&#x20;               </div>

&#x20;             ))}

&#x20;           </div>

&#x20;         </div>

&#x20;       )}



&#x20;     </main>



&#x20;     {/\* MODAL MODO FOCO \*/}

&#x20;     {showFocusMode \&\& (

&#x20;       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(11, 25, 44, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>

&#x20;         <div style={{ background: '#fff', width: '600px', padding: '30px', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.3)' }}>

&#x20;           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginBottom: '20px' }}>

&#x20;             <h3 style={{ margin: 0, color: '#0B192C' }}>⚡ Modo Foco - Discador Ativo</h3>

&#x20;             <button onClick={() => setShowFocusMode(false)} style={{ background: 'transparent', border: 'none', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>

&#x20;           </div>

&#x20;           <div style={{ textAlign: 'center', marginBottom: '20px' }}>

&#x20;             <h2 style={{ color: '#0284c7', margin: '0 0 5px 0' }}>English College</h2>

&#x20;             <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Contato: Suellen / Kattia | Tel: +55 (47) 3319-2102</p>

&#x20;             <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#22c55e', margin: '15px 0' }}>00:01:45</div>

&#x20;           </div>

&#x20;           <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '20px', fontSize: '13px' }}>

&#x20;             <strong>Script SPIN Selling:</strong> "Olá Suellen, vi que vocês possuem forte atuação em idiomas na região. Como está o suporte pedagógico atual da sua escola?"

&#x20;           </div>

&#x20;           <div style={{ display: 'flex', gap: '10px' }}>

&#x20;             <button style={{ flex: 1, padding: '10px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Agendar Reunião</button>

&#x20;             <button style={{ flex: 1, padding: '10px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Descartar Lead</button>

&#x20;             <button onClick={() => setShowFocusMode(false)} style={{ flex: 1, padding: '10px', background: '#0B192C', color: '#FFC107', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Próximo Lead ➔</button>

&#x20;           </div>

&#x20;         </div>

&#x20;       </div>

&#x20;     )}



&#x20;     {/\* MODAL FICHA DO LEAD \*/}

&#x20;     {selectedLead \&\& (

&#x20;       <div style={{ position: 'fixed', top: 0, right: 0, width: '450px', height: '100%', background: '#fff', boxShadow: '-5px 0 25px rgba(0,0,0,0.15)', zIndex: 2000, padding: '25px', overflowY: 'auto' }}>

&#x20;         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '20px' }}>

&#x20;           <h3 style={{ margin: 0, color: '#0B192C' }}>Ficha do Lead / Escola</h3>

&#x20;           <button onClick={() => setSelectedLead(null)} style={{ background: 'transparent', border: 'none', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>

&#x20;         </div>

&#x20;         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px' }}>

&#x20;           <div>

&#x20;             <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#334155' }}>Razão Social / Escola:</label>

&#x20;             <input type="text" defaultValue={selectedLead.name} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />

&#x20;           </div>

&#x20;           <div>

&#x20;             <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#334155' }}>Contato Principal:</label>

&#x20;             <input type="text" defaultValue={selectedLead.contact} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />

&#x20;           </div>

&#x20;           <div>

&#x20;             <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#334155' }}>Telefone:</label>

&#x20;             <input type="text" defaultValue={selectedLead.phone} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />

&#x20;           </div>

&#x20;           <div>

&#x20;             <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#334155' }}>Histórico de Observações:</label>

&#x20;             <textarea rows="4" placeholder="Adicionar anotação da ligação..." style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px' }}></textarea>

&#x20;           </div>

&#x20;           <button onClick={() => setSelectedLead(null)} style={{ background: '#0B192C', color: '#FFC107', padding: '10px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Salvar Alterações</button>

&#x20;         </div>

&#x20;       </div>

&#x20;     )}



&#x20;     {/\* MODAL ESCREVER E-MAIL \*/}

&#x20;     {showComposeEmail \&\& (

&#x20;       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>

&#x20;         <div style={{ background: '#fff', width: '550px', padding: '25px', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>

&#x20;           <h3 style={{ margin: '0 0 15px 0', color: '#0B192C' }}>Novo E-mail (Outlook Rockfeller)</h3>

&#x20;           <input type="text" placeholder="Para: escola@dominio.com.br" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />

&#x20;           <input type="text" placeholder="Assunto" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />

&#x20;           <textarea rows="5" placeholder="Escreva sua mensagem..." style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #cbd5e1', borderRadius: '4px' }}></textarea>

&#x20;           <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>

&#x20;             <button onClick={() => setShowComposeEmail(false)} style={{ padding: '8px 16px', background: '#cbd5e1', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancelar</button>

&#x20;             <button onClick={() => setShowComposeEmail(false)} style={{ padding: '8px 16px', background: '#0078D4', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Enviar E-mail</button>

&#x20;           </div>

&#x20;         </div>

&#x20;       </div>

&#x20;     )}



&#x20;   </div>

&#x20; );

}

