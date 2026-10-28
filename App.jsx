import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('crm');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
  const [timeFilter, setTimeFilter] = useState('mes');
  const [showDiscarded, setShowDiscarded] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showFocusMode, setShowFocusMode] = useState(false);
  const [showAgendaPopup, setShowAgendaPopup] = useState(false);
  const [emailTab, setEmailTab] = useState('entrada');
  const [showComposeEmail, setShowComposeEmail] = useState(false);

  const [leads, setLeads] = useState([
    { id: 1, name: 'English College', contact: 'Suellen / Kattia', phone: '+55 (47) 3319-2102', stage: 'novo', value: 'R$ 12.000', score: 85 },
    { id: 2, name: 'Magic Balloon Idiomas', contact: 'Marcos Vinicius', phone: '+55 (11) 98822-1144', stage: 'qualificacao', value: 'R$ 18.000', score: 92 },
    { id: 3, name: 'Lesser School of English', contact: 'Ana Paula', phone: '+55 (21) 3256-4002', stage: 'reuniao', value: 'R$ 25.000', score: 95 },
    { id: 4, name: 'Centro Educacional Novo Saber', contact: 'Maiara Venturi', phone: '+55 (47) 3319-2102', stage: 'proposta', value: 'R$ 30.000', score: 90 },
    { id: 5, name: 'The House English', contact: 'Carlos Eduardo', phone: '+55 (16) 99204-9585', stage: 'fechamento', value: 'R$ 45.000', score: 98 }
  ]);

  const emails = [
    { id: 1, type: 'entrada', sender: 'marcos.santos@rockfeller.com.br', subject: 'Aceito: Parceria Rockfeller Franchising & Sponte', preview: 'Olá equipe, confirmamos o interesse...', time: '13:53', date: '28/10/2026' },
    { id: 2, type: 'enviados', sender: 'fernando.leite@rockfeller.com.br', subject: 'Apresentação de DRE - Jonh Cler - Goiania', preview: 'Segue em anexo a apresentação detalhada...', time: '14:38', date: '28/10/2026' }
  ];

  const calls = [
    { school: 'Centro Educacional Novo Saber', operator: 'Maiara Venturi', phone: '+55 (47) 3319-2102', status: 'Aguardando Resposta', date: '27/10/2026', duration: '00:03:20' },
    { school: 'The House English', operator: 'Marcos Eduardo', phone: '+55 (16) 99204-9585', status: 'Aguardando Resposta', date: '22/10/2026', duration: '00:03:03' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6f9', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#0B192C', color: '#fff', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #FFC107' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h1 style={{ fontSize: '18px', margin: 0, color: '#FFC107', fontWeight: 'bold' }}>BDR CORE <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'normal' }}>| Rockfeller</span></h1>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setActiveTab('crm')} style={{ background: activeTab === 'crm' ? '#FFC107' : 'transparent', color: activeTab === 'crm' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>CRM Pipeline</button>
            <button onClick={() => setActiveTab('cadencias')} style={{ background: activeTab === 'cadencias' ? '#FFC107' : 'transparent', color: activeTab === 'cadencias' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Cadências</button>
            <button onClick={() => setActiveTab('emails')} style={{ background: activeTab === 'emails' ? '#FFC107' : 'transparent', color: activeTab === 'emails' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Central de E-mails</button>
            <button onClick={() => setActiveTab('extrato')} style={{ background: activeTab === 'extrato' ? '#FFC107' : 'transparent', color: activeTab === 'extrato' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Extrato & Webphone</button>
            <button onClick={() => setActiveTab('guia')} style={{ background: activeTab === 'guia' ? '#FFC107' : 'transparent', color: activeTab === 'guia' ? '#0B192C' : '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Guia & Manual</button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => setShowFocusMode(true)} style={{ background: '#28a745', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>⚡ Modo Foco</button>
          <button onClick={() => setShowAgendaPopup(!showAgendaPopup)} style={{ background: '#1e293b', color: '#fff', border: '1px solid #334155', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>📅 Agenda de Hoje (3)</button>
        </div>
      </header>

      {showAgendaPopup && (
        <div style={{ position: 'fixed', top: '65px', right: '20px', background: '#fff', width: '320px', padding: '16px', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.2)', zIndex: 1000, borderLeft: '4px solid #FFC107' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '15px', color: '#0B192C' }}>Compromissos de Hoje</h3>
          <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '13px', color: '#333', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>09:30</strong> - Ligação para English College</li>
            <li><strong>11:00</strong> - Reunião Teams com Magic Balloon</li>
            <li><strong>15:00</strong> - Envio de Proposta (Lesser School)</li>
          </ul>
          <button onClick={() => setShowAgendaPopup(false)} style={{ marginTop: '12px', width: '100%', padding: '6px', background: '#0B192C', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Fechar</button>
        </div>
      )}

      <main style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
        {activeTab === 'crm' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#0B192C' }}>Filtro:</span>
                {['hoje', 'ontem', 'semana', 'mes', 'todos'].map(f => (
                  <button key={f} onClick={() => setTimeFilter(f)} style={{ padding: '6px 12px', background: timeFilter === f ? '#0B192C' : '#e2e8f0', color: timeFilter === f ? '#FFC107' : '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', textTransform: 'capitalize', fontSize: '12px', fontWeight: 'bold' }}>{f}</button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setShowImportModal(true)} style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>📥 Importação CSV</button>
                <button onClick={() => setShowDiscarded(!showDiscarded)} style={{ background: showDiscarded ? '#64748b' : '#cbd5e1', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>{showDiscarded ? 'Ocultar Descartados' : 'Ver Descartados'}</button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>
              {[
                { key: 'novo', title: 'Novo Lead', color: '#3b82f6' },
                { key: 'qualificacao', title: 'Qualificação BANT', color: '#eab308' },
                { key: 'reuniao', title: 'Reunião', color: '#a855f7' },
                { key: 'proposta', title: 'Proposta Enviada', color: '#f97316' },
                { key: 'fechamento', title: 'Fechamento', color: '#22c55e' }
              ].map(col => (
                <div key={col.key} style={{ background: '#fff', borderRadius: '8px', borderTop: `4px solid ${col.color}`, padding: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#0B192C', display: 'flex', justifyContent: 'space-between' }}>
                    {col.title}
                    <span style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: '10px', fontSize: '11px' }}>{leads.filter(l => l.stage === col.key).length}</span>
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {leads.filter(l => l.stage === col.key).map(lead => (
                      <div key={lead.id} onClick={() => setSelectedLead(lead)} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', cursor: 'pointer' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#0f172a', marginBottom: '4px' }}>{lead.name}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px' }}>Contato: {lead.contact}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                          <span style={{ color: '#0284c7', fontWeight: 'bold' }}>{lead.value}</span>
                          <span style={{ background: '#dcfce7', color: '#15803d', padding: '2px 6px', borderRadius: '4px' }}>Score: {lead.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cadencias' && (
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ color: '#0B192C', marginTop: 0 }}>Central de Cadências Automatizadas</h3>
            <p style={{ color: '#666', fontSize: '13px' }}>Fluxos multicanal ativos para prospecção de franquias.</p>
          </div>
        )}

        {activeTab === 'emails' && (
          <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#0B192C', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '16px', color: '#FFC107' }}>Central de E-mails - Outlook (@rockfeller.com.br)</h3>
              <button onClick={() => setShowComposeEmail(true)} style={{ background: '#FFC107', color: '#0B192C', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>✍️ Escrever E-mail</button>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', padding: '0 20px' }}>
              {['entrada', 'enviados', 'lixeira'].map(tab => (
                <button key={tab} onClick={() => setEmailTab(tab)} style={{ padding: '12px 20px', background: 'transparent', border: 'none', borderBottom: emailTab === tab ? '3px solid #0B192C' : '3px solid transparent', fontWeight: emailTab === tab ? 'bold' : 'normal', color: emailTab === tab ? '#0B192C' : '#64748b', cursor: 'pointer', textTransform: 'capitalize' }}>{tab}</button>
              ))}
            </div>
            <div style={{ padding: '10px 20px' }}>
              {emails.filter(e => e.type === emailTab).map(mail => (
                <div key={mail.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#0f172a' }}>{mail.subject}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{mail.preview} ({mail.sender})</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>{mail.date} às {mail.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'extrato' && (
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ color: '#0B192C', marginTop: 0 }}>Extrato e Histórico de Ligações (Webphone)</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginTop: '15px' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', color: '#0B192C', textAlign: 'left' }}>
                  <th style={{ padding: '10px' }}>Escola / Lead</th>
                  <th style={{ padding: '10px' }}>Operador</th>
                  <th style={{ padding: '10px' }}>Telefone</th>
                  <th style={{ padding: '10px' }}>Status</th>
                  <th style={{ padding: '10px' }}>Duração</th>
                </tr>
              </thead>
              <tbody>
                {calls.map((c, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>{c.school}</td>
                    <td style={{ padding: '10px' }}>{c.operator}</td>
                    <td style={{ padding: '10px' }}>{c.phone}</td>
                    <td style={{ padding: '10px' }}>{c.status}</td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>{c.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'guia' && (
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ color: '#0B192C', marginTop: 0 }}>Guia & Manual do BDR Core</h3>
            <p style={{ color: '#666', fontSize: '13px' }}>Pílulas de vídeo interativas para treinamento da equipe.</p>
          </div>
        )}
      </main>

      {showFocusMode && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(11, 25, 44, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: '#fff', width: '600px', padding: '30px', borderRadius: '12px' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#0B192C' }}>⚡ Modo Foco - Discador Ativo</h3>
            <h2 style={{ color: '#0284c7' }}>English College</h2>
            <p style={{ color: '#666' }}>Telefone: +55 (47) 3319-2102</p>
            <button onClick={() => setShowFocusMode(false)} style={{ marginTop: '20px', padding: '10px 20px', background: '#0B192C', color: '#FFC107', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Fechar Modo Foco</button>
          </div>
        </div>
      )}

      {selectedLead && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '400px', height: '100%', background: '#fff', boxShadow: '-5px 0 25px rgba(0,0,0,0.15)', zIndex: 2000, padding: '25px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, color: '#0B192C' }}>Ficha do Lead</h3>
            <button onClick={() => setSelectedLead(null)} style={{ background: 'transparent', border: 'none', fontSize: '18px', cursor: 'pointer' }}>✕</button>
          </div>
          <p><strong>Nome:</strong> {selectedLead.name}</p>
          <p><strong>Contato:</strong> {selectedLead.contact}</p>
          <p><strong>Telefone:</strong> {selectedLead.phone}</p>
          <button onClick={() => setSelectedLead(null)} style={{ marginTop: '20px', padding: '8px 16px', background: '#0B192C', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Fechar</button>
        </div>
      )}

      {showImportModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: '#fff', width: '500px', padding: '25px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#0B192C' }}>📥 Importação em Massa de Leads (CSV)</h3>
            <p style={{ fontSize: '13px', color: '#666' }}>Selecione o ficheiro contendo a lista de escolas para o pipeline.</p>
            <input type="file" style={{ margin: '15px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowImportModal(false)} style={{ padding: '8px 16px', background: '#cbd5e1', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancelar</button>
              <button onClick={() => setShowImportModal(false)} style={{ padding: '8px 16px', background: '#0284c7', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Importar Leads</button>
            </div>
          </div>
        </div>
      )}

      {showComposeEmail && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: '#fff', width: '550px', padding: '25px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#0B192C' }}>Novo E-mail (Outlook Rockfeller)</h3>
            <input type="text" placeholder="Para: escola@dominio.com.br" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />
            <input type="text" placeholder="Assunto" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />
            <textarea rows="5" placeholder="Escreva sua mensagem..." style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #cbd5e1', borderRadius: '4px' }}></textarea>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowComposeEmail(false)} style={{ padding: '8px 16px', background: '#cbd5e1', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancelar</button>
              <button onClick={() => setShowComposeEmail(false)} style={{ padding: '8px 16px', background: '#0078D4', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Enviar E-mail</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
